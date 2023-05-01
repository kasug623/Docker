ARG PC_2_VERSION

FROM ${PC_2_VERSION}

RUN yum update -y \
    && yum install -y net-tools \
    && mkdir /root/start-scripts

ADD ./src/start-scripts/route.sh /root/start-scripts/route.sh
ADD ./src/startup.sh /root/startup.sh
ENTRYPOINT ["/root/startup.sh"]