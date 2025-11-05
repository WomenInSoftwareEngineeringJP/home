#!/usr/bin/env bash
set -e
############################################################
# WomenInSoftwareEngineeringJP Event Updater Instructions
#
# This script updates the event list from the Connpass API.
#
# Requirements:
#   - curl
#   - jq
#   - CONNPASS_API_KEY environment variable set
#
# Usage:
#   1. Copy .envrc.sample to .envrc and set your API key:
#        cp .envrc.sample .envrc
#        # Edit .envrc and set your CONNPASS_API_KEY
#   2. Load the environment variable:
#        # If you use direnv (recommended):
#        #   Install direnv: https://direnv.net/docs/installation.html
#        #   Run: direnv allow
#        # Or, source manually:
#        source .envrc
#   3. Run the script:
#        ./scripts/update-events.sh
#
#   Alternatively, you can run the script using Docker (no need to install curl/jq locally):
#
#     docker run -v $PWD:/target -e "CONNPASS_API_KEY=$CONNPASS_API_KEY" dwdraju/alpine-curl-jq bash /target/scripts/update-events.sh
#
############################################################
SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
cd "$SCRIPT_DIR/.."
if [ -z "$CONNPASS_API_KEY" ]; then
  echo "Error: CONNPASS_API_KEY environment variable is not set."
  exit 1
fi
curl -H "X-API-Key: $CONNPASS_API_KEY" "https://connpass.com/api/v2/events/?group_id=6753&order=1&count=5" | jq -f events.jq > src/routes/Event/events.json
