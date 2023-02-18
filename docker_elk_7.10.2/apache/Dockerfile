ARG ELK_VERSION
ARG APACHE_VERSION

FROM docker.elastic.co/beats/filebeat:${ELK_VERSION} AS filebeat-env

FROM httpd:${APACHE_VERSION}

COPY --from=filebeat-env /usr/share/filebeat /usr/share/filebeat