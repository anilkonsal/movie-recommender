const searcher = require('../searcher')
const movies = require('../movies.json')

test(`searcher('19:30') throws an Error`, () => {
  expect(() => searcher('19:30')).toThrow()
})

test(`searcher('19:30', 'Animation') returns does not return movie earlier timing`, () => {
  expect(searcher('19:30', 'Animation')).not.toEqual([ { name: 'Zootopia', time: '7:00pm', rating: 92 } ])
})

test(`searcher('19:30', 'Animation') returns one movie`, () => {
  expect(searcher('19:30', 'Animation')).toEqual([ { name: 'Zootopia', time: '9:00pm', rating: 92 }])
})

