FROM alpine/git

WORKDIR /app

RUN git clone https://github.com/cursosdevfull/Docker_Kubernetes_Group04.git


FROM node:16.13.1-alpine as base

WORKDIR /app

ADD package*.json .

RUN npm install

ADD . .

RUN npm run build:prod

FROM nginx:1.20.2-alpine

COPY --from=base /app/dist/app-angular /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
#COPY --from=base /app/nginx/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]