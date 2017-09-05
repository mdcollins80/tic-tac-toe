'use strict'

const store = {
  board: 'off',
  gameArray: [null, null, null, null, null, null, null, null, null],
  clickCounter: 0,
  turn: function () {
    return this.clickCounter % 2
  }
}

module.exports = store
