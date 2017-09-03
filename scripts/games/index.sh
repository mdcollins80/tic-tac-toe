#!/bin/bash
# ID='518' TOKEN='BAhJIiVjYTE2OGYwYTkzZTAxNWNlMWNhNTRlOWM2MjgwZWI3NwY6BkVG--126b28e1af73693bd9501475dd141b48e50ec759' sh scripts/games/index.sh

curl --include --request GET "http://tic-tac-toe.wdibos.com/games" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
