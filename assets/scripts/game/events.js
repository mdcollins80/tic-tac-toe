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
  // check for winner
  gamelogic.checkWinner(stores.gameArray)
  // EXPERIMENTAL SECTION
  // NOT WORKING YET

  // let j = 0
  // let k = 0
  // for (let i = 0; i < stores.gameArray.length; i++) {
  //   if (stores.gameArray[i] === 'x') {
  //     stores.xArray[j] = i
  //     j += 1
  //   } else if (stores.gameArray[i] === 'o') {
  //     stores.oArray[k] = i
  //     k += 1
  //   }
  // }
  // bunch of console logs to check my work.
  // console.log('X click count = ' + stores.clickCounter)
  // console.log(stores.gameArray)
  // console.log('The id is: ' + $(this).attr('id'))
  // console.log('stores.gameArray[i] = ' + stores.gameArray[0])
  // console.log(stores.xArray)
  // console.log(stores.oArray)
  // gameApi.updateGame(id) in this row to update this game's array in real
  // time.
}

module.exports = {
  click // export to index.js
}
