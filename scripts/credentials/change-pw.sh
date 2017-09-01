#!/bin/bash
# ID='518' TOKEN='BAhJIiViOWRjMmYzYmQ3N2YzN2RjZTBkY2M1OWZmMTIxYzZiZQY6BkVG--59a794401cff043389a314be8ae4acb6e843ea14' OLD='123' NEW='321' NEW_CONFIRM='321' sh scripts/credentials/change-pw.sh

curl --include --request PATCH "http://tic-tac-toe.wdibos.com/change-password/${ID}" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD}"'",
      "new": "'"${NEW}"'",
      "new-confirm": "'"${NEW_CONFIRM}"'"
    }
  }'

echo
