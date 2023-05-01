#!/bin/bash
route del default gw $NET_1_DOCKER_GATEWAY
route add default gw $PC_1_GATEWAY