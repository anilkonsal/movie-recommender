const _ = require('lodash')
const moment = require('moment')
const movies = require('./movies.json')
const messages = require('./messages')

module.exports = (time, genre) => {
  if (!time || !genre) {
    throw new Error(messages.TIME_GENRE_NOT_PROVIDED)
  }

  const startTime = moment(time, 'HH:mm').add(30, 'minutes')

  let m = []

  movies.forEach(movie => {
    if (movie.genres.indexOf(genre) !== -1) {
      let timingAvailable = movie.showings.find(showing => startTime.isBefore(moment(showing, 'HH:mm:ss')))
      if (timingAvailable) {
        m.push({
          name: movie.name,
          time: moment(timingAvailable, 'HH:mm:ss').format('h:mma'),
          rating: movie.rating
        })
      }
    }
  })

  return _.sortBy(m, 'rating').reverse()
}
