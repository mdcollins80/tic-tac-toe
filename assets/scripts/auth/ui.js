'use strict'

const store = require('../store')
const gameApi = require('../game/api')
const gameUi = require('../game/ui')
const boardReset = require('../game/board-reset')

const onSignUpSuccess = function (data) {
  store.user = data.user
  $('#message').show().text('You\'re signed up bro! Now sign in!').fadeOut(7500)
  $('#sign-up-box').addClass('hidden')
}

const onSignUpFailure = function () {
  $('#message').show().text('Sign-up problems bro!').fadeOut(5000)
}

const onSignInSuccess = function (data) {
  store.user = data.user
  $('#message').show().text('Nice sign-in bro!').fadeOut(5000)
  $('main').removeClass('hidden')
  $('header').removeClass('hidden')
  $('nav').removeClass('hidden')
  $('#landing').addClass('hidden')

  // show all games played statistics
  gameApi.getGames()
    .then(gameUi.onGetGamesSuccess)
    .catch(gameUi.onGetGamesFailure)
  // show all finished games statistics
  gameApi.getFinishedGames()
    .then(gameUi.onGetFinishedGamesSuccess)
    .catch(gameUi.onGetFinishedGamesFailure)
}

const onSignInFailure = function () {
  $('#message').show().text('Got problems signing in bro!').fadeOut(5000)
}

const onChangePasswordSuccess = function () {
  $('#user-change-pw').addClass('hidden')
  $('#message').show().text('Changed your password bro!').fadeOut(5000)
}

const onChangePasswordFailure = function () {
  $('#message').show().text('Problems changing your password bro!').fadeOut(5000)
}

const onSignOutSuccess = function () {
  boardReset.boardReset()
  store.board = 'off'
  $('#message').show().text('Signed out bro!').fadeOut(5000)
  $('main').addClass('hidden')
  $('header').addClass('hidden')
  $('nav').addClass('hidden')
  $('#landing').removeClass('hidden')
  $('#sign-up-box').removeClass('hidden')
}

const onSignOutFailure = function () {
  $('#message').show().text('Failed to sign out bro!').fadeOut(5000)
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
