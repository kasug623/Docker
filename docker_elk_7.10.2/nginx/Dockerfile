ARG ELK_VERSION
ARG NGINX_VERSION

FROM docker.elastic.co/beats/metricbeat:${ELK_VERSION} AS metricbeat-env

FROM nginx:${NGINX_VERSION}

COPY --from=metricbeat-env /usr/share/metricbeat /usr/share/metricbeat

WORKDIR /usr/share/metricbeat