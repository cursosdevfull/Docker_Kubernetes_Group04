FROM node:14.15.3-alpine

ARG BASE_DIR="backend2"

WORKDIR /app

COPY ${BASE_DIR}/package*.json ./

RUN npm install

COPY ${BASE_DIR}/ .

CMD ["npm", "run", "start"]