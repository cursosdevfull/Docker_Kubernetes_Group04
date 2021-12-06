FROM nginx:1.20.2-alpine

WORKDIR /etc/nginx/conf.d

COPY nginx/nginx.conf .

# RUN mv nginx.conf default.conf

WORKDIR /usr/share/nginx/html

COPY src .