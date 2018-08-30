FROM node

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN mkdir -p /code
WORKDIR /code
COPY . /code

RUN yarn install --production;
RUN yarn webpack

EXPOSE 3000

CMD yarn run start
