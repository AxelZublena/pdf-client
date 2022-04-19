# syntax=docker/dockerfile:1
FROM mhart/alpine-node:16

# install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Copy all local files into the image.
COPY . .

RUN npm run build

###
# Only copy over the Node pieces we need
# ~> Saves 35MB
###
FROM mhart/alpine-node:slim-16

WORKDIR /app
COPY --from=0 /app .
COPY . .

EXPOSE 8080
# CMD ["PORT=8080 node", "./build"]
CMD sh -C cmd.sh
