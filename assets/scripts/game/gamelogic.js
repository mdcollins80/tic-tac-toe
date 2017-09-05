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
    store.board = 'off'
    $('#message').show().text('X wins the game bro!').fadeOut(10000)
    return true
  } else if ((gameArray[0] === 'o' && gameArray[1] === 'o' && gameArray[2] === 'o') ||
  (gameArray[3] === 'o' && gameArray[4] === 'o' && gameArray[5] === 'o') ||
  (gameArray[6] === 'o' && gameArray[7] === 'o' && gameArray[8] === 'o') ||
  (gameArray[0] === 'o' && gameArray[3] === 'o' && gameArray[6] === 'o') ||
  (gameArray[1] === 'o' && gameArray[4] === 'o' && gameArray[7] === 'o') ||
  (gameArray[2] === 'o' && gameArray[5] === 'o' && gameArray[8] === 'o') ||
  (gameArray[0] === 'o' && gameArray[4] === 'o' && gameArray[8] === 'o') ||
  (gameArray[2] === 'o' && gameArray[4] === 'o' && gameArray[6] === 'o')) {
    store.board = 'off'
    $('#message').show().text('O wins the game bro!').fadeOut(10000)
    return true
  } else if (store.clickCounter === 9) {
    store.board = 'off'
    $('#message').show().text('It\'s a DRAW bro!').fadeOut(10000)
    return true
  } else {
    return false
  }
}

module.exports = {
  playerMove,
  checkWinner
}
