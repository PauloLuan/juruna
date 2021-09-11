#!/usr/bin/env node

import camelCase from 'lodash/camelCase'
import capitalize from 'lodash/capitalize'
import nodePlop, { ActionType } from 'node-plop'
import path from 'path'

const generatorsPath = path.join(__dirname, 'templates')
const plopBase = path.join(generatorsPath, 'plopfile.hbs')
const plop = nodePlop(plopBase)

const ACTION_TYPE = 'addMany'
const TEMPLATE_FILES = 'component/**'
const BASE = 'component/'

async function createReactComponent(componentName: string, outputDir: string) {
  plop.setHelper('capitalize', (text) => {
    return capitalize(camelCase(text))
  })

  plop.setGenerator('component', {
    description: 'Generates a component package',
    prompts: [],
    actions() {
      const actions: ActionType[] = []
      const destinationPath = path.join(outputDir, '{{dashCase componentName}}')

      actions.push({
        type: ACTION_TYPE,
        templateFiles: TEMPLATE_FILES,
        destination: destinationPath,
        base: BASE,
        data: { componentName },
        abortOnFail: true
      })

      return actions
    }
  })

  const { runPrompts, runActions } = plop.getGenerator('component')

  const answers = await runPrompts()
  await runActions(answers)
}

export async function run(name = 'teste') {
  const OUTPUT_DIR = process.cwd()
  await createReactComponent(name, OUTPUT_DIR)
}
