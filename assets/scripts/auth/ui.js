'use strict'

const store = require('../store')

const onSignUpSuccess = function (data) {
  console.log('You successfully signed up bro!')
  store.user = data.user
  console.log(store.user)
  $('#message').text('Successfully signed up bro!')
}

const onSignUpFailure = function (error) {
  console.log(error)
  $('#message').text('There was a problem!')
}

const onSignInSuccess = function (data) {
  console.log('You successfully signed in!')
  store.user = data.user
  console.log(store.user)
  $('#message').text('Successfully signed in!')
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
