// save tfstate in cloud
terraform {
  backend "s3" {
    bucket               = "terraform-files"
    key                  = "pwa/terraform.tfstate"
    workspace_key_prefix = "pwa"
    region               = "us-east-1"
  }
}

// access route53 tfstate
data "terraform_remote_state" "aws_route53" {
  backend = "s3"

  config = {
    bucket = "terraform-files"
    key    = "{type-s3-name-here}/route/terraform.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region = local.region
}

#####
##   Build website
####

data "external" "install_packages" {
  count       = local.install_packages
  program     = ["bash", "-c", "yarn install --modules-folder ../node_modules"]
  working_dir = "../"
}

data "external" "build_website" {
  count = local.build_website
  program = ["bash", "-c", <<EOT
(yarn build:${local.environment} --modules-folder ../node_modules) >&2 && echo "{\"dest\": \"dist\"}"
EOT
  ]
  working_dir = "../"
}

#####
##   Create a bucket and upload website
####
resource "aws_s3_bucket" "website" {
  bucket = "${local.name_prefix}-bucket"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  cors_rule {
    allowed_methods = local.s3_allowed_methods
    allowed_origins = ["*"]
  }

  versioning {
    enabled = local.environment == "production" ? true : false
  }

  tags = local.common_tags
}

resource "aws_s3_bucket_object" "upload_website" {
  for_each = fileset("../dist/", "**")

  bucket       = aws_s3_bucket.website.bucket
  key          = each.value
  acl          = "public-read"
  source       = "../dist/${each.value}"
  content_type = local.mime_type_mappings[concat(regexall("\\.([^\\.]*)$", each.value), [[""]])[0][0]]
  # etag makes the file update when it changes; see https://stackoverflow.com/questions/56107258/terraform-upload-file-to-s3-on-every-apply
  etag = filemd5("../dist/${each.value}")
}

#####
##   ACM Certification
####

resource "aws_acm_certificate" "acm_certificate" {
  domain_name       = local.domain_main
  validation_method = "DNS"

  subject_alternative_names = local.domain_subs

  tags = local.common_tags
}

resource "aws_route53_record" "create_acm_records" {
  for_each = {
    for dvo in aws_acm_certificate.acm_certificate.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.terraform_remote_state.aws_route53.outputs.route_zone_id
}

resource "aws_acm_certificate_validation" "validate_acm_certification" {
  certificate_arn         = aws_acm_certificate.acm_certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.create_acm_records : record.fqdn]
}

#####
##   Cloudfront distribution
####

resource "aws_cloudfront_distribution" "website_distribution" {
  origin {
    domain_name = aws_s3_bucket.website.bucket_regional_domain_name
    origin_id   = "origin-bucket-${aws_s3_bucket.website.id}"
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = local.domains

  default_cache_behavior {
    allowed_methods  = local.allowed_methods
    cached_methods   = local.cache_methods
    target_origin_id = "origin-bucket-${aws_s3_bucket.website.id}"

    forwarded_values {
      query_string = true

      cookies {
        forward = "all"
      }
    }

    min_ttl     = local.ttl_times.min_ttl
    default_ttl = local.ttl_times.default_ttl
    max_ttl     = local.ttl_times.max_ttl
    compress    = true
    # viewer_protocol_policy = "allow-all"
    viewer_protocol_policy = "redirect-to-https"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    # cloudfront_default_certificate = true
    acm_certificate_arn = aws_acm_certificate.acm_certificate.arn
    ssl_support_method  = "sni-only"
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/"
  }

  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/"
  }

  tags = local.common_tags
}

#####
##   Route 53
####

resource "aws_route53_record" "domain_name" {
  zone_id         = data.terraform_remote_state.aws_route53.outputs.route_zone_id
  name            = local.domain_main
  type            = "A"
  allow_overwrite = true

  alias {
    name                   = aws_cloudfront_distribution.website_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.website_distribution.hosted_zone_id
    evaluate_target_health = true
  }
}

#####
##   Redirect subdomain to main domain
####

resource "aws_s3_bucket" "website_redirect" {
  count  = length(local.domains) >= 1 ? 1 : 0
  bucket = "${local.name_prefix}-subdomain-redirect"
  acl    = "public-read"

  website {
    redirect_all_requests_to = local.domain_main
  }

  cors_rule {
    allowed_methods = local.s3_allowed_methods
    allowed_origins = ["*"]
  }

  tags = local.common_tags
}

resource "aws_route53_record" "subdomain_redirect" {
  for_each = toset(local.domain_subs)

  zone_id         = data.terraform_remote_state.aws_route53.outputs.route_zone_id
  name            = each.key
  type            = "A"
  allow_overwrite = true

  alias {
    name                   = aws_s3_bucket.website_redirect[0].website_endpoint
    zone_id                = aws_s3_bucket.website_redirect[0].hosted_zone_id
    evaluate_target_health = true
  }
}
