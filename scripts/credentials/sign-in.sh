#!/bin/bash
# EMAIL='Farts' PASSWORD='123' sh scripts/credentials/sign-in.sh

curl --include --request POST "http://tic-tac-toe.wdibos.com/sign-in" \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
