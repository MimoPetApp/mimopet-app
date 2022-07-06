FROM node:12 as develop-stage
MAINTAINER JadsonLucena <jadsonlucena@gmail.com>

RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip

WORKDIR /usr/src/app

COPY --chown=node:node ./ ./

#ENV NODE_ENV=production

#RUN npm install -g npm@latest
#RUN npm install --production
RUN npm install
RUN npm install -g @quasar/cli

# Installed Vue deps
RUN quasar build

RUN quasar build -m pwa

# production stage
FROM nginx:alpine as production-stage
COPY --from=develop-stage /usr/src/app/dist/pwa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]