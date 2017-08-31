'use strict'

const gameArray = [null, null, null, null, null, null, null, null, null]

const click = function (player, index) {
  if (player === 'x') {
    if (gameArray[index] !== null) {
      return 'box already used'
    } else {
      gameArray[index] = 'x'
      return gameArray
    }
  } else {
    if (gameArray[index] !== null) {
      return 'box already used'
    } else {
      gameArray[index] = 'o'
      return gameArray
    }
  }
}

module.export = {
  gameArray,
  click
}

/*
Winning combinations for arrays:

[0,1,2]
[3,4,5]
[6,7,8]
[0,3,6]
[1,4,7]
[2,5,8]
[0,4,8]
[2,4,6]
*/
