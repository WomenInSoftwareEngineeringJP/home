#!/usr/bin/env bash
set -e
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
cd "$SCRIPT_DIR/.."
if [ -z "$CONNPASS_API_KEY" ]; then
  echo "Error: CONNPASS_API_KEY environment variable is not set."
  exit 1
fi
curl -H "X-API-Key: $CONNPASS_API_KEY" "https://connpass.com/api/v2/events/?group_id=6753&order=1&count=5" | jq -f events.jq > src/routes/Event/events.json
