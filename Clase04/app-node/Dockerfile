FROM node:16.13.1-alpine

WORKDIR /app

# RUN mkdir /app

ADD package*.json .

# RUN cd /app && npm i
RUN npm install
COPY . .


CMD ["node", "index.js"]