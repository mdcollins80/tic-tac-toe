#!/bin/bash
# ID='5001' TOKEN='BAhJIiU5NTI3MWIxNDRhNGI3ZmEwN2M1ODQ0N2U4NDNiZWVhYwY6BkVG--7c1d88ca091aaf23469dca15b685e3d6685ab833' sh scripts/games/show.sh

curl --include --request GET "http://tic-tac-toe.wdibos.com/games/${ID}" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
