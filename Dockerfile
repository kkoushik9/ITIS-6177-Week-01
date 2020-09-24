FROM node:latest

RUN mkdir -p /ITIS-6177_WEEK-01

WORKDIR /ITIS-6177_WEEK-01

COPY package.json .

RUN npm install

COPY . .

ENV PORT = 8080

EXPOSE 8080

CMD ["node", "express-server"]