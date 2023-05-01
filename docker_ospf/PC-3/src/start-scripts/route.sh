#!/bin/bash
route del default gw $NET_4_DOCKER_GATEWAY
route add default gw $PC_3_GATEWAY