'use strict'

const store = require('../store')
const boardReset = require('./board-reset')

const onGetGamesSuccess = function (data) {
  $('#stats-total').text(data.games.length)
}

const onGetGamesFailure = function () {
  $('#message').show().text('Did not get your games bro!').fadeOut(5000)
}

const onGetFinishedGamesSuccess = function (data) {
  $('#stats-over').text(data.games.length)
}

const onGetFinishedGamesFailure = function (data) {
  $('#message').show().text('Did not get those games bro!').fadeOut(5000)
}

const onNewGameSuccess = function (data) {
  store.game = data.game
  boardReset.boardReset() // doesn't like this!
  $('#message').show().text('Made a new game bro! ID: ' + data.game.id)
  // $('.gameboard').on('click', gameEvents.click)
}

const onNewGameFailure = function () {
  $('#message').show().text('No new game bro! Bummer').fadeOut(5000)
}

const onGetGameSuccess = function (data) {
  // $('.gameboard').on('click', gameEvents.click)
  store.game = data.game
  store.gameArray = data.game.cells
  for (let i = 0; i < store.game.cells.length; i++) {
    $('#' + i).text(store.game.cells[i])
  }
  const clicks = store.game.cells.filter(function (item) {
    return item !== ''
  })
  store.clickCounter = clicks.length
  boardReset.boardOn()
  $('#message').show().text('Retrieved a game bro!').fadeOut(5000)
  $('.get-game-input').val('')
}

const onGetGameFailure = function () {
  $('#message').show().text('Didn\'t get that game for you bro!').fadeOut(5000)
}

const onUpdateGameSuccess = function (data) {
  store.game = data.game
}

const onUpdateGameFailure = function () {
  $('#message').show().text('Didn\'t update the game for you bro!').fadeOut(5000)
}

module.exports = {
  onGetGamesSuccess,
  onGetGamesFailure,
  onGetFinishedGamesSuccess,
  onGetFinishedGamesFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onGetGameSuccess,
  onGetGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
