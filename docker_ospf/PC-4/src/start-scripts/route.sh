#!/bin/bash
route del default gw $NET_5_DOCKER_GATEWAY
route add default gw $PC_4_GATEWAY