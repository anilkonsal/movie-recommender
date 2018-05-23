const _ = require('lodash')
const messages = require('./messages')

module.exports = (moviesArr = []) => {
  if (_.isEmpty(moviesArr)) {
    return messages.NO_MOVIE
  }

  let string = moviesArr.map(movie => `${movie.name}, showing at ${movie.time}`).join('\n')

  return string
}
