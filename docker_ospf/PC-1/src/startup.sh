#!/bin/bash

for script in `ls -l /root/start-scripts/`
do
    /root/start-scripts/$script
done

while :; do sleep 10; done