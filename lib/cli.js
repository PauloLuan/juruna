#!/usr/bin/env node
const meow = require('meow')
// const juruna = require('./')

const cli = meow(
  `
Usage
  $ juruna [input]

Options
  --foo  Lorem ipsum. [Default: false]

Examples
  $ juruna
  unicorns
  $ juruna rainbows
  unicorns & rainbows
`
)

module.exports = cli
