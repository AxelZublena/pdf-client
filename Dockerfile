# syntax=docker/dockerfile:1
FROM node:17-alpine AS build

WORKDIR /app

# copy files and install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
RUN echo $(ls public)

FROM nginx:alpine
COPY --from=build /app/public /usr/share/nginx/html
