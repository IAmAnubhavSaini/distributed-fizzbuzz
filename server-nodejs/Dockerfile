FROM node:16-slim

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# RUN npm install
RUN npm ci --only=production

COPY server.mjs .
COPY .env .

EXPOSE 16000

CMD ["node", "server.mjs"]
