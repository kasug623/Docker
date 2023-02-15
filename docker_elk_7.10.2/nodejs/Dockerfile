ARG ELK_VERSION
ARG NODEJS_VERSION

FROM docker.elastic.co/beats/filebeat:${ELK_VERSION} AS filebeat-env

FROM node:${NODEJS_VERSION}

COPY --from=filebeat-env /usr/share/filebeat /usr/share/filebeat

ENV NODE_ENV production
ENV NODE_PATH /usr/local/lib/node_modules

WORKDIR /usr/src

# ENTRYPOINT ["/bin/sh", "-c", "while :; do sleep 10; done"]
# docker exec and npm init

RUN npm install -g express \
    && npm install -g nodemon

CMD ["npm", "start"]