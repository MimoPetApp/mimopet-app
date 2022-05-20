FROM node:14
MAINTAINER JadsonLucena <jadsonlucena@gmail.com>

RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip

WORKDIR /usr/src/app

COPY --chown=node:node ./ ./

ENV NODE_ENV=production

#RUN npm install -g npm@latest
RUN npm install --production
RUN yarn global add quasar
RUN yarn global add @quasar/cli

RUN quasar build -m pwa

USER node

CMD quasar dev -m pwa