'use strict'

const stores = require('../store')

const playerMove = function (event) {
  event.preventDefault()
  // get the id of the square that was clicked for updating the array
  const move = $(this).attr('id')
  $(this).text('X')
  // increasee click accumulator stored in the Store file
  stores.clickCounter += 1
  // edit the gameArray with an 'x'.  Need to update for switching between
  // x and o.
  stores.gameArray[move] = 'x'
  console.log('X click count = ' + stores.clickCounter)
  console.log(stores.gameArray)
  console.log('The id is: ' + $(this).attr('id'))
  // gameApi.updateGame(id) in this row to update this game's array in real
  // time.
}

module.exports = {
  playerMove // export to index.js
}

// expand the topLeft function to each of the squares?
