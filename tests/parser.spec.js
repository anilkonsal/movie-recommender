const parse = require('../parser')

test(`hello is converted to {}`, () => {
  expect(parse('hello')).toEqual({})
})

test(`hello:1 is converted to {hello: '1'}`, () => {
  expect(parse('hello:1')).toEqual({hello: '1'})
})

test(`hello:1,world:2 is converted to {hello: '1', world: '2'}`, () => {
  expect(parse('hello:1,world:2')).toEqual({hello: '1', world: '2'})
})

test(`'' is converted to not a Falsy value`, () => {
  expect(parse('')).not.toBeFalsy()
})