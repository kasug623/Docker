ARG ELASTIC_VERSION

# https://www.docker.elastic.co/
FROM docker.elastic.co/elasticsearch/elasticsearch:${ELASTIC_VERSION}

# install kuromoji
## https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html
## https://www.elastic.co/guide/en/elasticsearch/plugins/current/plugin-management-custom-url.html
## https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji-analyzer.html
COPY ./plugins/analysis-kuromoji-8.6.2.zip /usr/share/elasticsearch/analysis-kuromoji-8.6.2.zip

RUN /usr/share/elasticsearch/bin/elasticsearch-plugin install file:///usr/share/elasticsearch/analysis-kuromoji-8.6.2.zip