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
  // bunch of console logs to check my work.
  console.log('X click count = ' + stores.clickCounter)
  console.log(stores.gameArray)
  console.log('The id is: ' + $(this).attr('id'))
  // gameApi.updateGame(id) in this row to update this game's array in real
  // time.
}

module.exports = {
  click // export to index.js
}
