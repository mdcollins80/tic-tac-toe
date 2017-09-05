'use strict'

const store = require('../store.js')

const boardReset = function () {
  for (let i = 0; i < store.gameArray.length; i++) {
    store.gameArray[i] = null
  }
  store.clickCounter = 0
  store.board = 'on'
  $('.gameboard').text('')
}

const boardOn = function () {
  store.board = 'on'
}

module.exports = {
  boardReset,
  boardOn
}
