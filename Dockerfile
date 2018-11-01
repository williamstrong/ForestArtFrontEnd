FROM node:alpine

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN mkdir -p /code
WORKDIR /code
COPY . /code

RUN npm install

RUN npm install -g webpack webpack-cli
RUN webpack -d

EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["run", "start"]
