#!/bin/sh

echo "Building Dockerfile"
docker build -t githop -f Dockerfile . || exit 1
docker tag githop tripodsan/probot-ow-nodejs8:latest
docker push tripodsan/probot-ow-nodejs8:latest
