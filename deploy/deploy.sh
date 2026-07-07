#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

source "$SCRIPT_DIR/.env"

RUNTIME_ENV="$SCRIPT_DIR/.env.runtime"
COMPOSE_FILE="$SCRIPT_DIR/composes/docker-compose-prod.yaml"

INFISICAL_PATHS=(
    "/postgres"
    "/jwt"
)

echo "📦 Экспорт секретов..."

: > "$RUNTIME_ENV"

for path in "${INFISICAL_PATHS[@]}"; do
    echo "  ↳ Экспорт из $path"

    infisical export \
        --projectId="$INFISICAL_PROJECT_ID" \
        --env=dev \
        --path="$path" \
        --format=dotenv \
        >> "$RUNTIME_ENV"

    echo >> "$RUNTIME_ENV"
done

echo "🐳 Запуск Docker Compose..."

docker-compose \
    -f "$COMPOSE_FILE" \
    --env-file "$RUNTIME_ENV" \
    up -d --build

echo "🧹 Удаление временного файла..."

rm -f "$RUNTIME_ENV"

echo "✅ Deploy успешно завершен."