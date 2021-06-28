variable "environment" {
  type    = string
  default = ""
}

variable "install_packages" {
  type    = bool
  default = false
}

variable "build_website" {
  type    = bool
  default = true
}

locals {
  ####
  ## app settings configuration
  ####
  app_name       = "mimopet-pwa"
  app_domain     = "mimopet.com.br"
  request_policy = "read-discover" // see available_request_methods in this file
  cache_policy   = "read-discover" // see available_cache_methods in this file

  ####
  ## deploy vars - not edit
  ####
  name_prefix        = "${local.environment}-${local.app_name}"
  environment        = coalesce(var.environment, terraform.workspace)
  region             = lookup(local.available_environments_regions, local.environment)
  domains            = lookup(local.available_domains, local.environment)
  domain_main        = element(local.domains, 0)
  domain_subs        = slice(local.domains, 1, length(local.domains))
  ttl_times          = lookup(local.available_ttl, local.environment)
  allowed_methods    = lookup(local.available_request_methods, local.request_policy)
  s3_allowed_methods = [for x in local.allowed_methods : x if !contains(["OPTIONS", "PATCH"], x)]
  cache_methods      = lookup(local.available_cache_methods, local.cache_policy)
  install_packages   = var.install_packages ? 1 : 0
  build_website      = var.build_website ? 1 : 0

  ####
  ## mapping options - not edit
  ####
  available_environments_regions = {
    "development" = "us-east-1"
    "qa"          = "us-east-1"
    "staging"     = "us-east-1"
    "production"  = "us-east-1"
  }

  available_ttl = {
    "development" = { "min_ttl" = 0, "default_ttl" = 10, "max_ttl" = 30 }
    "qa"          = { "min_ttl" = 0, "default_ttl" = 10, "max_ttl" = 30 }
    "staging"     = { "min_ttl" = 0, "default_ttl" = 10, "max_ttl" = 30 }
    "production"  = { "min_ttl" = 1800, "default_ttl" = 3600, "max_ttl" = 86400 }
  }

  available_domains = {
    "development" = ["dev.${local.app_domain}"]
    "qa"          = ["qa.${local.app_domain}"]
    "staging"     = ["staging.${local.app_domain}"]
    "production"  = ["www.${local.app_domain}", "${local.app_domain}"]
  }

  available_request_methods = {
    "read-only"     = ["GET", "HEAD"]
    "read-discover" = ["GET", "HEAD", "OPTIONS"]
    "allow-all"     = ["GET", "HEAD", "OPTIONS", "POST", "PUT", "PATCH", "DELETE"]
  }

  available_cache_methods = {
    "read-only"     = ["GET", "HEAD"]
    "read-discover" = ["GET", "HEAD", "OPTIONS"]
  }

  common_tags = {
    "Terraform"   = "true"
    "Environment" = local.environment
  }

  mime_type_mappings = {
    "html" = "text/html",
    "js"   = "text/javascript",
    "map"  = "text/javascript", ## because of '.js.map' output of webpack builder 
    "css"  = "text/css",
    "json" = "application/json",
    "txt"  = "text/plain",
    "png"  = "image/png",
    "jpg"  = "image/jpeg",
    "svg"  = "image/svg+xml"
  }

}
