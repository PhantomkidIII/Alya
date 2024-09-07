FROM node:lts-buster

RUN https://github.com/PhantomkidIII/Alya

RUN npm cache clean --force
RUN rm -rf /root/PhantomkidIII/node_modules

# Install dependencies
WORKDIR /root/PhantomkidIII
RUN npm install

COPY package.json .

EXPOSE 5000

CMD ["node", "index.js"]
