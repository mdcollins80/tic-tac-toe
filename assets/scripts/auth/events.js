'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const userApi = require('./api')
const userUi = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const user = data.credentials
  console.log(data.credentials)

  if (user.email.length !== 0) {
    if (user.password === user.password_confirmation) {
      userApi.signUp(data)
        .then(userUi.onSignUpSuccess)
        .catch(userUi.onSignUpFailure)
      // userApi.signIn(data)
      //   .then(userUi.onSignInSuccess)
      //   .catch(userUi.onSignInFailure)
    } else {
      $('#message').show().text('Passwords don\'t match bro!').fadeOut(5000)
    }
  } else {
    $('#message').show().text('Enter an email bro!').fadeOut(5000)
  }
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  userApi.signIn(data)
    .then(userUi.onSignInSuccess)
    .catch(userUi.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const passwords = data.passwords

  if (passwords.new === passwords.newConfirm) {
    userApi.changePassword(data)
      .then(userUi.onChangePasswordSuccess)
      .catch(userUi.onChangePasswordFailure)
  } else {
    $('#message').show().text('Passwords don\'t match bro!').fadeOut(5000)
  }
}

const onSignOut = function (event) {
  event.preventDefault()
  userApi.signOut()
    .then(userUi.onSignOutSuccess)
    .catch(userUi.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
