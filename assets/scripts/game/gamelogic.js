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

const checkWinner = function (gameArray) {
  if ((gameArray[0] === 'x' && gameArray[1] === 'x' && gameArray[2] === 'x') ||
  (gameArray[3] === 'x' && gameArray[4] === 'x' && gameArray[5] === 'x') ||
  (gameArray[6] === 'x' && gameArray[7] === 'x' && gameArray[8] === 'x') ||
  (gameArray[0] === 'x' && gameArray[3] === 'x' && gameArray[6] === 'x') ||
  (gameArray[1] === 'x' && gameArray[4] === 'x' && gameArray[7] === 'x') ||
  (gameArray[2] === 'x' && gameArray[5] === 'x' && gameArray[8] === 'x') ||
  (gameArray[0] === 'x' && gameArray[4] === 'x' && gameArray[8] === 'x') ||
  (gameArray[2] === 'x' && gameArray[4] === 'x' && gameArray[6] === 'x')) {
    console.log('X is the winner!')
    $('.gameboard').off()
  } else if ((gameArray[0] === 'o' && gameArray[1] === 'o' && gameArray[2] === 'o') ||
  (gameArray[3] === 'o' && gameArray[4] === 'o' && gameArray[5] === 'o') ||
  (gameArray[6] === 'o' && gameArray[7] === 'o' && gameArray[8] === 'o') ||
  (gameArray[0] === 'o' && gameArray[3] === 'o' && gameArray[6] === 'o') ||
  (gameArray[1] === 'o' && gameArray[4] === 'o' && gameArray[7] === 'o') ||
  (gameArray[2] === 'o' && gameArray[5] === 'o' && gameArray[8] === 'o') ||
  (gameArray[0] === 'o' && gameArray[4] === 'o' && gameArray[8] === 'o') ||
  (gameArray[2] === 'o' && gameArray[4] === 'o' && gameArray[6] === 'o')) {
    console.log('O is the winner!')
    $('.gameboard').off()
  }
}

// EXPERIMENTAL SECTION
// NOT WORKING YET

// const isIncluded = function (element) {
//   return playerArray.includes(element)
// }
//
// const checkWinner2 = function (array) {
//   return array.every(isIncluded)
// }
//
// const checkWinners = function (winnersArray) {
//   return winnersArray.some(checkWinner2)
// }

module.exports = {
  playerMove,
  checkWinner
}
