#!/bin/bash
. config.cfg

echo "-- Removing old server --"
docker rm afdodernsdap

echo "-- Starting afdodernsdap --"

docker run --detach \
  --name afdodernsdap \
  --restart unless-stopped \
  --expose 30001 \
  --network ${NETWORK_NAME} \
  --env VIRTUAL_HOST=${HOSTNAME} \
  --env VIRTUAL_PORT=30001 \
  --env LETSENCRYPT_HOST=${HOSTNAME} \
  afdodernsdap

echo "- startup done -"
