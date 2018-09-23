#!/bin/sh

TAG=tripodsan/probot-ow-nodejs8:latest

echo "Building Dockerfile"
docker build -t $TAG -f Dockerfile . || exit 1
docker push $TAG
