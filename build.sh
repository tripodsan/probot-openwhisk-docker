#!/bin/sh

TAG=tripodsan/probot-ow-nodejs10:latest

# ensure logged in
docker login

echo "Building Dockerfile"
docker build -t $TAG -f Dockerfile . || exit 1
echo "Uploading image"
docker push $TAG
