const formatter = require('../formatter')
const messages = require('../messages')

test(`[] returns 'No movie recommendation' `, () => {
  expect(formatter([])).toBe(messages.NO_MOVIE)
})

test(`[{name: 'Zootopia', time: '6:30pm', rating: 92 }] returns 'Zootopia, showing at 6:30pm'`, () => {
  expect(formatter([{ name: 'Zootopia', time: '6:30pm', rating: 92 }])).toBe('Zootopia, showing at 6:30pm')
})

test(`multi element array returns multiline string`, () => {
  expect(formatter([
    { name: 'Zootopia', time: '6:30pm', rating: 92 },
    { name: 'Townsville', time: '7:30pm', rating: 82 }
  ])).toBe('Zootopia, showing at 6:30pm\nTownsville, showing at 7:30pm')
})
