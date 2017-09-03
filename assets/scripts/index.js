'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEvents = require('./game/events')
const authEvents = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
  $('.gameboard').on('click', gameEvents.click)
  $('.reset').on('click', gameEvents.boardReset)
  $('#user-sign-up').on('submit', authEvents.onSignUp)
  $('#user-sign-in').on('submit', authEvents.onSignIn)
  $('#user-change-password').on('submit', authEvents.onChangePassword)
  $('#user-sign-out').on('submit', authEvents.onSignOut)
  // Game API Event Listeners
  $('#get-games').on('submit', gameEvents.onGetGames)
  $('#new-game').on('submit', gameEvents.onNewGame)
  $('#get-game').on('submit', gameEvents.onGetGame)
  // $('.gameboard').on('click', gameEvents.onNewMove)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
