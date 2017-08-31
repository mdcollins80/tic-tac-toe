'use strict'

const stores = require('../store')

const playerMove = function (index) {
  if (stores.gameArray[index] !== null) {
    console.log('Box already used!')
  } else {
    stores.clickCounter += 1
    if (stores.turn() === 1) {
      stores.gameArray[index] = 'x'
      return stores.gameArray // for passing to the GameAPI later?
    } else {
      stores.gameArray[index] = 'o'
      return stores.gameArray // for passing to the GameAPI later?
    }
  }
}

module.exports = {
  playerMove
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
