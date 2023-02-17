ARG ELK_VERSION
ARG RUBY_VERSION

FROM ruby:${RUBY_VERSION}

COPY ./app/Gemfile /usr/src/app/Gemfile
COPY ./app/Gemfile.lock /usr/src/app/Gemfile.lock

WORKDIR /usr/src/app

# note: `rail new` must overwrite existed Gemfile.
RUN apk update \
    && apk upgrade \
    && apk add --no-cache \
        gcc \
        g++ \
        libc-dev \
        libxml2-dev \
        linux-headers \
        make \
        nodejs \
        postgresql \
        postgresql-dev \
        tzdata \
        yarn \
        git \
    && apk add --virtual build-packs --no-cache \
        build-base \
        curl-dev \
    && bundle install \
    && apk del build-packs \
    && rails new . --force

CMD ["bundle", "exec", "rails", "server", "-p", "3000", "-b", "0.0.0.0"]

# debug
#ENTRYPOINT ["/bin/sh", "-c", "while :; do sleep 10; done"]
