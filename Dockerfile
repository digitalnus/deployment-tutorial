FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .
EXPOSE 8080

RUN npm run build

FROM nginx:latest
COPY --from=0 /app/build /usr/share/nginx/html

