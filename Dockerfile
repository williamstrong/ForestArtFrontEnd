FROM node:10.2.1

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN mkdir -p /code
WORKDIR /code
ADD . /code
RUN yarn install --no-cache --frozen-lockfile --production;
CMD [ "yarn", "build" ]
