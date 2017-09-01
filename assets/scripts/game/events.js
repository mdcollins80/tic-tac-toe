'use strict'

const stores = require('../store')
const gamelogic = require('./gamelogic')

const click = function (event) {
  event.preventDefault()
  // get the id of the square that was clicked for updating the array
  const move = $(this).attr('id')
  // updates gameArray with X or O depending on turn
  gamelogic.playerMove(move)
  // checks turn, inserts X or O accordingly
  $(this).text(() => stores.turn() === 1 ? 'X' : 'O')
  console.log(stores.gameArray)
  // check for winner
  gamelogic.checkWinner(stores.gameArray)
}

const boardReset = function (event) {
  event.preventDefault()
  for (let i = 0; i < stores.gameArray.length; i++) {
    stores.gameArray[i] = null
  }
  stores.clickCounter = 0
  console.log('clicked reset!')
  console.log(stores.gameArray)
  console.log(stores.clickCounter)
  $('.gameboard').text('')
  $('.gameboard').on('click', click)
}

module.exports = {
  click, // export to index.js
  boardReset // export to index.js
}
