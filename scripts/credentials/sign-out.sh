#!/bin/bash
# ID='518' TOKEN='BAhJIiVjMzhjMTUxMjlkMDQ4YjQzY2RlZWI0NjcyYTg0OGRkMwY6BkVG--9ff733dfeb6d567238ba571066a23a9ecfb33ba5' sh scripts/credentials/sign-out.sh

curl --include --request DELETE "http://tic-tac-toe.wdibos.com/sign-out/${ID}" \
  --header "Authorization: Token token=${TOKEN}" \

echo
