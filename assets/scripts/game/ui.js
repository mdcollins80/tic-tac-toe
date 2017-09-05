'use strict'

const store = require('../store')

const onGetGamesSuccess = function (data) {
  console.log('You got your games bro!')
  console.log(data)
  $('#message').show().text('You got your games bro!').fadeOut(5000)
  $('.gameboard').on()
}

const onGetGamesFailure = function () {
  console.log('Did not get your games bro!')
  $('#message').show().text('Did not get your games bro!').fadeOut(5000)
}

const onNewGameSuccess = function (data) {
  store.game = data.game
  $('#message').show().text('Made a new game bro! ID: ' + data.game.id)
  $('.gameboard').on()
}

const onNewGameFailure = function (error) {
  console.log(error)
  console.log('No new game bro! Bummer!')
  $('#message').show().text('No new game bro! Bummer').fadeOut(5000)
}

const onGetGameSuccess = function (data) {
  console.log('Retrieved a game bro!')
  console.log(data)
  store.game = data.game
  store.gameArray = data.game
  for (let i = 0; i < )
  console.log(store.game)
  $('#message').show().text('Retrieved a game bro!').fadeOut(5000)
  $('.gameboard').on()
}

const onGetGameFailure = function (error) {
  console.log(error)
  console.log('Didn\'t get that game for you bro!')
  $('#message').show().text('Didn\'t get that game for you bro!').fadeOut(5000)
}

const onUpdateGameSuccess = function (data) {
  console.log('Updated the game bro!')
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
