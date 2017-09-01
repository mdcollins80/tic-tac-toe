#!/bin/bash
# EMAIL='Farts' PASSWORD='123' PASSWORD_CONFIRMATION='123' sh scripts/credentials/sign-up.sh

curl --include --request POST "http://tic-tac-toe.wdibos.com/sign-up" \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
    }
  }'

echo
