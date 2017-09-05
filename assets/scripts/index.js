'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEvents = require('./game/events')
const authEvents = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
  // $('.gameboard').on('click', gameEvents.click)
  $('#user-sign-up').on('submit', authEvents.onSignUp)
  $('#user-sign-in').on('submit', authEvents.onSignIn)
  $('#user-sign-in').on('submit', gameEvents.onGetGames).delay(2000)
  $('#change-pw').on('click', function (event) {
    console.log('password change clicked')
    $('#user-change-pw').removeClass('hidden')
  })
  $('#user-change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out-btn').on('click', authEvents.onSignOut)
  // Game API Event Listeners
  $('#new-game-btn').on('click', gameEvents.onNewGame)
  $('#new-game-btn').on('click', gameEvents.boardReset)
  $('#get-game-btn').on('submit', gameEvents.onGetGame)
  // $('.gameboard').on('click', gameEvents.onNewMove)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
