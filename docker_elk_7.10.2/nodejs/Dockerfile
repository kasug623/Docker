ARG NODEJS_VERSION

FROM node:${NODEJS_VERSION}

ENV NODE_ENV production
ENV NODE_PATH /usr/local/lib/node_modules

WORKDIR /usr/src

# ENTRYPOINT ["/bin/sh", "-c", "while :; do sleep 10; done"]
# docker exec and npm init

RUN npm install -g express --save\
    && npm install -g nodemon --save\
    && npm install -g elastic-apm-node --save

CMD ["npm", "start"]