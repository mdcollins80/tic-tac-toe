'use strict'

const store = require('../store')

const playerMove = function (index) {
  if (store.game.cells[index] !== null) {
    console.log('Box already used!')
  } else {
    store.clickCounter += 1
    // if (store.turn() === 1) {
    //   store.gameArray[index] = 'x'
    //   // return store.gameArray // for passing to the GameAPI later?
    // } else {
    //   store.gameArray[index] = 'o'
    //   // return store.gameArray // for passing to the GameAPI later?
    // }
  }
}

const checkWinner = function (gameArray) {
  if ((gameArray[0] === 'X' && gameArray[1] === 'X' && gameArray[2] === 'X') ||
  (gameArray[3] === 'X' && gameArray[4] === 'X' && gameArray[5] === 'X') ||
  (gameArray[6] === 'X' && gameArray[7] === 'X' && gameArray[8] === 'X') ||
  (gameArray[0] === 'X' && gameArray[3] === 'X' && gameArray[6] === 'X') ||
  (gameArray[1] === 'X' && gameArray[4] === 'X' && gameArray[7] === 'X') ||
  (gameArray[2] === 'X' && gameArray[5] === 'X' && gameArray[8] === 'X') ||
  (gameArray[0] === 'X' && gameArray[4] === 'X' && gameArray[8] === 'X') ||
  (gameArray[2] === 'X' && gameArray[4] === 'X' && gameArray[6] === 'X')) {
    store.board = 'off'
    $('#message').show().text('X wins the game bro!').fadeOut(5000)
    return true
  } else if ((gameArray[0] === 'O' && gameArray[1] === 'O' && gameArray[2] === 'O') ||
  (gameArray[3] === 'O' && gameArray[4] === 'O' && gameArray[5] === 'O') ||
  (gameArray[6] === 'O' && gameArray[7] === 'O' && gameArray[8] === 'O') ||
  (gameArray[0] === 'O' && gameArray[3] === 'O' && gameArray[6] === 'O') ||
  (gameArray[1] === 'O' && gameArray[4] === 'O' && gameArray[7] === 'O') ||
  (gameArray[2] === 'O' && gameArray[5] === 'O' && gameArray[8] === 'O') ||
  (gameArray[0] === 'O' && gameArray[4] === 'O' && gameArray[8] === 'O') ||
  (gameArray[2] === 'O' && gameArray[4] === 'O' && gameArray[6] === 'O')) {
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
