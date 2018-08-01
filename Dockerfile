FROM node:10.2.1

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN mkdir -p /code
WORKDIR /code
ADD . /code
RUN set -ex; \
  if [ "$NODE_ENV" = "production" ]; then \
    yarn install --no-cache --frozen-lockfile --production; \
  elif [ "$NODE_ENV" = "test" ]; then \
    yarn install --no-cache --frozen-lockfile; \
  fi;
CMD [ "yarn", "start" ]
EXPOSE 3000
