#!/usr/bin/env node
import { string } from '@jest/types/node_modules/@types/yargs'
import yargs from 'yargs'

const generators = {
  rc: {
    description: 'rc: React component',
    generatorFn: () => {} //require('./cli')
  },
  rp: {
    description: 'rp: React Project',
    generatorFn: () => {} //require('./cli')
  }
}

const choices: string[] = Object.keys(generators)
const descriptions = choices
  .map((choice) => {
    const choiceDescription = generators[choice].description + '\n'
    return choiceDescription
  })
  .join()

const argv = yargs.options({
  type: {
    choices,
    demandOption: true,
    alias: 't',
    description: descriptions
  },
  name: {
    type: 'string',
    demandOption: true,
    alias: 'n',
    description: 'the name of generator component or project'
  }
}).argv

const { type, name }: any = argv

console.log('==============')
console.log('argv :>> ', JSON.stringify({ type, name }, null, 2))
console.log('==============')

const selectedGenerator = generators[type]
