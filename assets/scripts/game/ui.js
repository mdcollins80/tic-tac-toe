'use strict'

const store = require('../store')
const gameEvents = require('./events')

const onGetGamesSuccess = function (data) {
  console.log('You got your games bro!')
  console.log(data.games.length)
  $('#stats-total').text(data.games.length)
  $('#message').show().text('You got your games bro!').fadeOut(5000)
  $('.gameboard').on('click', gameEvents.click)
}

const onGetGamesFailure = function () {
  console.log('Did not get your games bro!')
  $('#message').show().text('Did not get your games bro!').fadeOut(5000)
}

const onNewGameSuccess = function (data) {
  console.log('new game success ran')
  store.game = data.game
  $('#message').show().text('Made a new game bro! ID: ' + data.game.id)
  $('.gameboard').on('click', gameEvents.click)
}

const onNewGameFailure = function (error) {
  console.log(error)
  console.log('No new game bro! Bummer!')
  $('#message').show().text('No new game bro! Bummer').fadeOut(5000)
}

const onGetGameSuccess = function (data) {
  $('.gameboard').on('click', gameEvents.click)
  store.game = data.game
  store.gameArray = data.game
  for (let i = 0; i < store.game.cells.length; i++) {
    $('#' + i).text(store.game.cells[i])
  }
  const clicks = store.game.cells.filter(function (item) {
    return item !== ''
  })
  store.clickCounter = clicks.length
  console.log('click counter is at: ' + store.clickCounter)
  $('#message').show().text('Retrieved a game bro!').fadeOut(5000)
}

const onGetGameFailure = function (error) {
  console.log(error)
  console.log('Didn\'t get that game for you bro!')
  $('#message').show().text('Didn\'t get that game for you bro!').fadeOut(5000)
}

const onUpdateGameSuccess = function (data) {
  console.log('clickCounter is at: ' + store.clickCounter)
  console.log('turn mod is at: ' + store.turn())
  console.log(data)
  store.game = data.game
}

const onUpdateGameFailure = function (error) {
  console.log(error)
  console.log('Didn\'t update the game for you bro!')
  $('#message').show().text('Didn\'t update the game for you bro!').fadeOut(5000)
}

module.exports = {
  onGetGamesSuccess,
  onGetGamesFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onGetGameSuccess,
  onGetGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
