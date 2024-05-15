# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production

RUN npm install -g ts-node

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --save-dev

COPY . .

EXPOSE 8000

# Run the application.
CMD ["ts-node", "src/server.ts"]
