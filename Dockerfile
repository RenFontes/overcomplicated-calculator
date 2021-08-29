FROM node:14.17.5

WORKDIR /app

COPY package*.json ./

RUN npm i -g pnpm

RUN pnpm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["pnpm", "start"]