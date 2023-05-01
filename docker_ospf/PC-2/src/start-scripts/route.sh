#!/bin/bash
route del default gw $NET_3_DOCKER_GATEWAY
route add default gw $PC_2_GATEWAY