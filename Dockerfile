FROM node:alpine as build

ENV NODE_OPTIONS=--openssl-legacy-provider
ENV CHROME_BIN='/usr/bin/chromium-browser'
ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/fibonacci /usr/share/nginx/html

EXPOSE 80