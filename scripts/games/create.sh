#!/bin/bash
# TOKEN='BAhJIiU2MDdhZWJjYTBmM2QzOTk5MGVkN2Y5ZjIyM2EyOGE1NQY6BkVG--68bcb62de88120fefe9fef4fc6534bae6b422148' sh scripts/games/create.sh

curl --include --request POST "http://tic-tac-toe.wdibos.com/games" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
