'use strict'

const store = {
  gameArray: [null, null, null, null, null, null, null, null, null],
  clickCounter: 0,
  turn: function () {
    return this.clickCounter % 2
  },
  winners: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ],
  xArray: [],
  oArray: []
}

module.exports = store
