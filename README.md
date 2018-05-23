## Movie Recommender
This is a nodejs based cli script to recommend the movies based on time and genre provided

### Installation
Make sure you have nodejs installed on your system

* Clone this repo
`git clone https://github.com/anilkonsal/movie-recommender.git`

* open terminal and goto the folder
`$ cd movie-recommender`

* install node_modules
`$ npm install`

### Run the CLI script
`$ ./index.js time:12:30,genre:Animation`
Make sure there is no space in the arguments i.e 'time:12:30,genre:Animation' should be without any space.

### Running tests
Tests have been written using JEST testing framework by Facebook. To run the tests run:
`$ npm test`

## Dependencies
Two major packages are installed as dependencies
1. Lodash
2. Moment

Lodash is a helper library which has many handy functions not available in Javascript.

Moment is used to have the date time comparisons in an easy and effective way.
