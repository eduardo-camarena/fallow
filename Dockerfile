FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY postcss.config.js tailwind.config.js tsconfig.json ./
COPY src/ src/

CMD npm run dev
