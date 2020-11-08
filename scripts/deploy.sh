#!/bin/bash
echo "updating instance & codebase with CodeDeploy"
cd /home/nickmorr-dot-is/

# stop/prune existing containers & pull latest build
docker stop $(docker container ls -aq) && yes | docker system prune
docker pull nickmorris991/nickmorr-dot-is:latest

# run latest image & final prune of all dangling data
docker run -d -t -p 80:5000 --name personal-site nickmorris991/nickmorr-dot-is 
yes | docker system prune