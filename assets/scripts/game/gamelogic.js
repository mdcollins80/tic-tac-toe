'use strict'

const store = require('../store')

const playerMove = function (index) {
  if (store.gameArray[index] !== null) {
    console.log('Box already used!')
  } else {
    store.clickCounter += 1
    if (store.turn() === 1) {
      store.gameArray[index] = 'x'
      // return store.gameArray // for passing to the GameAPI later?
    } else {
      store.gameArray[index] = 'o'
      // return store.gameArray // for passing to the GameAPI later?
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
    $('.gameboard').off()
    console.log('X is the winner!')
    $('#message').show().text('X wins the game bro!').hide(5000)
    return true
  } else if ((gameArray[0] === 'o' && gameArray[1] === 'o' && gameArray[2] === 'o') ||
  (gameArray[3] === 'o' && gameArray[4] === 'o' && gameArray[5] === 'o') ||
  (gameArray[6] === 'o' && gameArray[7] === 'o' && gameArray[8] === 'o') ||
  (gameArray[0] === 'o' && gameArray[3] === 'o' && gameArray[6] === 'o') ||
  (gameArray[1] === 'o' && gameArray[4] === 'o' && gameArray[7] === 'o') ||
  (gameArray[2] === 'o' && gameArray[5] === 'o' && gameArray[8] === 'o') ||
  (gameArray[0] === 'o' && gameArray[4] === 'o' && gameArray[8] === 'o') ||
  (gameArray[2] === 'o' && gameArray[4] === 'o' && gameArray[6] === 'o')) {
    $('.gameboard').off()
    console.log('O is the winner!')
    $('#message').show().text('O wins the game bro!').hide(5000)
    return true
  } else if (store.clickCounter === 9) {
    $('#message').show().text('It\'s a DRAW bro!').hide(5000)
    return true
  } else {
    return false
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
