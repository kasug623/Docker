#!/bin/sh

for script in `ls -1 /root/start-up/start-scripts/`
do
    /root/start-up/start-scripts/$script 
done