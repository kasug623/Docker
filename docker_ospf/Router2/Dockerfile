ARG ROUTER_2_VERSION

FROM ${ROUTER_2_VERSION}

COPY ./src/daemons /etc/frr/daemons
COPY ./src/frr.conf /etc/frr/
COPY ./src/vtysh.conf /etc/frr/ 

RUN chown frr:frr /etc/frr/daemons \
    && chmod 644 /etc/frr/daemons