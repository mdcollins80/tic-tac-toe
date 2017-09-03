#!/bin/bash
#ID=5001 TOKEN='BAhJIiVmZjIxMGE3M2ZkOTFjYjUzZmVhMGI0ZjQyMThlZDRmZAY6BkVG--caac4eb9dfc7071130e521bcc514bc2f57155087' sh scripts/games/update-game.sh

curl --include --request PATCH "http://tic-tac-toe.wdibos.com/games/${ID}" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'

echo
