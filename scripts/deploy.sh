#!/bin/bash
echo "updating instance with CodeDeploy"
cd /home/nickmorr-dot-is/

# stop/prune existing containers & pull latest build
docker stop $(docker container ls -aq) && yes | docker system prune
docker pull nickmorris991/nickmorr-dot-is:latest

# run latest image with updated code from CodeDeploy
docker run -d -t -p 80:5000 nickmorris991/nickmorr-dot-is