'use strict'

const store = require('../store')
const gameEvents = require('../game/events')
const gameApi = require('../game/api')
const gameUi = require('../game/ui')

const onSignUpSuccess = function (data) {
  console.log(data)
  console.log('You successfully signed up bro!')
  store.user = data.user
  $('#message').show().text('You\'re signed up bro! Now sign in!').fadeOut(7500)
  $('#sign-up-box').addClass('hidden')
  // $('main').removeClass('hidden')
  // $('header').removeClass('hidden')
  // $('nav').removeClass('hidden')
  // $('#landing').addClass('hidden')
}

const onSignUpFailure = function (error) {
  console.log(error)
  $('#message').show().text('Sign-up problems bro!').fadeOut(5000)
}

const onSignInSuccess = function (data) {
  store.user = data.user
  console.log('next line is data.user:')
  console.log(data.user)
  console.log(store.user)
  $('#message').text('Nice sign-in bro!').fadeOut(5000)
  $('main').removeClass('hidden')
  $('header').removeClass('hidden')
  $('nav').removeClass('hidden')
  $('#landing').addClass('hidden')

  // show the statistics
  gameApi.getGames()
    .then(gameUi.onGetGamesSuccess)
    .catch(gameUi.onGetGamesFailure)
}

const onSignInFailure = function (error) {
  console.log(error)
  $('#message').show().text('Got problems signing in bro!').fadeOut(5000)
}

const onChangePasswordSuccess = function () {
  console.log('Changed your password!')
  $('#user-change-pw').addClass('hidden')
  $('#message').show().text('Changed your password bro!').fadeOut(5000)
}

const onChangePasswordFailure = function () {
  console.log('Problems changing your password bro!')
  $('#message').show().text('Problems changing your password bro!').fadeOut(5000)
}

const onSignOutSuccess = function () {
  console.log('Signed out bro!')
  gameEvents.boardReset()
  $('#message').show().text('Signed out bro!').fadeOut(5000)
  $('main').addClass('hidden')
  $('header').addClass('hidden')
  $('nav').addClass('hidden')
  $('#landing').removeClass('hidden')
  $('#sign-up-box').removeClass('hidden')
}

const onSignOutFailure = function () {
  console.log('Failed to sign out bro!')
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
