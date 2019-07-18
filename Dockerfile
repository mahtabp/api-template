FROM node:10

ENV APP_DIR /usr/src/app

WORKDIR "${APP_DIR}"

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build

WORKDIR ./dist

EXPOSE 8085

# CMD node src/server.js
CMD [ "node", "src/server.js"]