#!/bin/bash
. config.cfg

echo "-- Removing old Umami instance --"
docker rm umami

echo "-- Removing old Umami Database --"
docker rm umami-db

echo "-- Starting Umami Database --"

docker run --detach \
  --name umami-db \
  --restart unless-stopped \
  -v /mnt/umami-db-data:/var/lib/postgresql/data \
  --network ${NETWORK_NAME} \
  --expose 5432 \
  --env POSTGRES_DB=${UMAMI_POSTGRES_DATABASE} \
  --env POSTGRES_USER=${UMAMI_POSTGRES_USERNAME} \
  --env POSTGRES_PASSWORD=${UMAMI_POSTGRES_PASSWORD} \
  postgres:15-alpine

# @TODO: Remove old instances

echo "-- Starting umami instance --"

docker run --detach \
  --name umami \
  --restart unless-stopped \
  --env "DATABASE_URL=postgres://${UMAMI_POSTGRES_USERNAME}:${UMAMI_POSTGRES_PASSWORD}@umami-db:5432/${UMAMI_POSTGRES_DATABASE}" \
  --env DATABASE_TYPE=postgres \
  --env APP_SECRECT=${UMAMI_SECRET} \
  --env PORT=30012 \
  --network ${NETWORK_NAME} \
  --expose 30012 \
  --env VIRTUAL_HOST=${UMAMI_HOSTNAME} \
  --env VIRTUAL_PORT=30012 \
  --env LETSENCRYPT_HOST=${UMAMI_HOSTNAME} \
  ghcr.io/umami-software/umami:postgresql-latest

echo "- startup done -"
