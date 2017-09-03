'use strict'

const store = require('../store')

const onGetGamesSuccess = function (data) {
  console.log('You got your games bro!')
  console.log(data)
  $('#message').text('You got your games bro!')
}

const onGetGamesFailure = function () {
  console.log('Did not get your games bro!')
  $('#message').text('Did not get your games bro!')
}

const onNewGameSuccess = function (data) {
  console.log('Made a new game bro!')
  console.log(data)
  store.game = data.game
  console.log(store.game)
  $('#message').text('Made a new game bro!')
}

const onNewGameFailure = function (error) {
  console.log(error)
  console.log('No new game bro! Bummer!')
  $('#message').text('No new game bro! Bummer')
}

const onGetGameSuccess = function (data) {
  console.log('Retrieved a game bro!')
  console.log(data)
  store.game = data.game
  console.log(store.game)
  $('#message').text('Retrieved a game bro!')
}

const onGetGameFailure = function (error) {
  console.log(error)
  console.log('Didn\'t get that game for you bro!')
  $('#message').text('Didn\'t get that game for you bro!')
}

const onUpdateGameSuccess = function (data) {
  console.log('Updated the game bro!')
  console.log(data)
  store.game = data.game
  $('#message').text('Updated the game bro!')
}

const onUpdateGameFailure = function (error) {
  console.log(error)
  console.log('Didn\'t update the game for you bro!')
  $('#message').text('Didn\'t update the game for you bro!')
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
