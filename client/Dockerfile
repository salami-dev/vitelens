# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine as build

# Use production node environment by default.
ENV NODE_ENV production

USER node

WORKDIR /usr/src/app

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run build


FROM node:${NODE_VERSION}-alpine as final

WORKDIR /app

RUN npm install -g serve

COPY --from=build /usr/src/app/build .

EXPOSE 3000

CMD [ "serve", "-s", "/app" ]