#!/bin/bash
#ID=5001 TOKEN='BAhJIiU5MjdkZGNhNWQ2ZGNlZmI1YzA2N2VjMTU5OWJlOGEwNgY6BkVG--000142c670efac7d2544242ccc6ba8949ded2b76' sh scripts/games/update.sh

curl --include --request PATCH "http://tic-tac-toe.wdibos.com/games/${ID}" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data ''

echo
