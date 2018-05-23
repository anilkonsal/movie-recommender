#!/usr/bin/env node

const parse = require('./parser')
const searcher = require('./searcher')
const formatter = require('./formatter')

const [,, ...args] = process.argv

// console.log(`${args}`)

if (args.length < 1) {
  console.log('Noting provided')
  process.exit(1)
}

let parsedArgs = parse(args[0])

if (!(parsedArgs.time && parsedArgs.genre)) {
  console.log('Both Time and Genre should be provided')
  process.exit(1)
}

let results = searcher(parsedArgs.time, parsedArgs.genre)
let stringResults = formatter(results)
console.log(stringResults)
