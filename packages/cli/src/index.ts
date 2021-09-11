#!/usr/bin/env node
import yargs from 'yargs'

const generators = {
  rc: {
    description: 'rc: React component',
    generatorFn: require('./generators/react').component
  },
  rp: {
    description: 'rp: React Project'
    // generatorFn: require('./generators/react/project')
  },
  rnc: {
    description: 'rc: React Native component'
    // generatorFn: require('./generators/react-native/component')
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
const selectedGenerator = generators[type]

const IS_SELECTION_VALID = !!selectedGenerator
if (!IS_SELECTION_VALID) throw new Error('You should select a valid config')

selectedGenerator.generatorFn.call(null, name)
