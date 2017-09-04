'use strict'

const config = require('../config')
const store = require('../store')

const getGames = function () {
  return $.ajax({
    url: config.apiOrigins.development + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newGame = function () {
  return $.ajax({
    url: config.apiOrigins.development + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getGame = function (data) {
  return $.ajax({
    url: config.apiOrigins.development + '/games/' + data.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigins.development + '/games/' + store.game.id,
    method: 'PATCH',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getGames,
  newGame,
  getGame,
  updateGame
}
