'use strict'

const store = require('../store')
const userApi = require('./api')

const onSignUpSuccess = function (data) {
  console.log(data)
  console.log('You successfully signed up bro!')
  store.user = data.user
  console.log(store.user)
  userApi.signIn(JSON.stringify(store.user))
    .then(onSignInSuccess)
    .catch(onSignInFailure)

  $('#message').text('You\'re signed up and signed in bro!')
  $('main').removeClass('hidden')
  $('#landing').addClass('hidden')
}

const onSignUpFailure = function (error) {
  console.log(error)
  $('#message').text('Sign-up problems bro!')
}

const onSignInSuccess = function (data) {
  console.log('You successfully signed in!')
  store.user = data.user
  console.log(store.user)
  $('#message').text('Nice sign-in bro!').hide(3000)
  $('main').removeClass('hidden')
  $('header').removeClass('hidden')
  $('#landing').addClass('hidden')
}

const onSignInFailure = function (error) {
  console.log(error)
  $('#message').text('There was a problem signing in!')
}

const onChangePasswordSuccess = function () {
  console.log('Changed your password!')
  $('#message').text('Changed your password!')
}

const onChangePasswordFailure = function () {
  console.log('Problems changing your password bro!')
  $('#message').text('Problems changing your password bro!')
}

const onSignOutSuccess = function () {
  console.log('Signed out bro!')
  $('#message').text('Signed out bro!')
}

const onSignOutFailure = function () {
  console.log('Failed to sign out bro!')
  $('#message').text('Failed to sign out bro!')
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
