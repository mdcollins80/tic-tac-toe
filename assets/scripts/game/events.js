'use strict'

const store = require('../store')
const gamelogic = require('./gamelogic')
const gameApi = require('./api')
const gameUi = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const click = function (event) {
  event.preventDefault()
  const move = $(this).attr('id')
  // updates gameArray with X or O depending on turn
  gamelogic.playerMove(move)
  // checks turn, inserts X or O accordingly
  const turn = () => store.turn() === 1 ? 'X' : 'O'
  $(this).text(turn)
  console.log(store.gameArray)
  // check for winner
  const over = gamelogic.checkWinner(store.gameArray)
  // send data to the updateGame API call
  const data = {
    game: {
      cell: {
        index: move,
        value: turn()
      },
      over: over
    }
  }
  gameApi.updateGame(JSON.stringify(data))
    .then(gameUi.onUpdateGameSuccess)
    .catch(gameUi.onUpdateGameFailure)
}

const boardReset = function () {
  // event.preventDefault()
  for (let i = 0; i < store.gameArray.length; i++) {
    store.gameArray[i] = null
  }
  store.clickCounter = 0
  console.log('ran boardReset, clickCounter is at: ' + store.clickCounter)
  $('.gameboard').text('')
  $('.gameboard').on('click', click)
}

const onGetGames = function (event) {
  event.preventDefault()
  gameApi.getGames()
    .then(gameUi.onGetGamesSuccess)
    .catch(gameUi.onGetGamesFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  gameApi.newGame()
    .then(gameUi.onNewGameSuccess)
    .catch(gameUi.onNewGameFailure)
}

const onGetGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.getGame(data)
    .then(gameUi.onGetGameSuccess)
    .catch(gameUi.onGetGameFailure)
}

module.exports = {
  click, // export to index.js
  boardReset, // export to index.js
  onGetGames,
  onNewGame,
  onGetGame
}
