'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEvents = require('./game/events')
const authEvents = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
  $('.gameboard').on('click', gameEvents.click)
  $('#user-sign-up').on('submit', authEvents.onSignUp)
  $('#user-sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('click', function (event) {
    $('#user-change-pw').removeClass('hidden')
  })
  $('#user-change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-btn').on('click', authEvents.onSignOut)
  $('#new-game-btn').on('click', gameEvents.onNewGame)
  $('#get-game-btn').on('submit', gameEvents.onGetGame)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
