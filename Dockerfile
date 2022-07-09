### STAGE 1: Build ###
FROM node:16.13.0-alpine AS build
RUN apk --no-cache add --virtual .builds-deps build-base python3
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install -g npm@8.13.2
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html
