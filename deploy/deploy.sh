#!/usr/bin/env bash
set -e
source ./.env

export INFISICAL_TOKEN=$(
  infisical login \
    --method=universal-auth \
    --client-id="$INFISICAL_CLIENT_ID" \
    --client-secret="$INFISICAL_CLIENT_SECRET" \
    --silent \
    --plain
)

infisical export \
  --projectId="$INFISICAL_PROJECT_ID" \
  --env=prod \
  --format=dotenv \
  > .env.runtime

docker compose -f \
  ./composes/docker-compose-prod.yaml \
  --env-file .env.runtime \
  up -d --build