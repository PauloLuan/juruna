#!/usr/bin/env node

import camelCase from 'lodash/camelCase'
import capitalize from 'lodash/capitalize'
import nodePlop, { ActionType } from 'node-plop'
import path from 'path'
const generatorsPath = path.join(__dirname, '../../../../generators')

const plopBase = path.join(generatorsPath, 'plopfile.hbs')
const plop = nodePlop(plopBase)

const workspaces = ['packages'] as const

type Workspace = typeof workspaces[number]

interface Answers {
  componentName: string
  description: string
  outDir: Workspace
}

async function createPackage(outputDir: string) {
  plop.setHelper('capitalize', (text) => {
    return capitalize(camelCase(text))
  })

  plop.setGenerator('component', {
    description: 'Generates a component package',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'The description of this component:'
      }
    ],
    actions(answers: any) {
      const actions: ActionType[] = []

      if (!answers) return actions

      const { componentName, description } = answers as Answers

      const destinationPath = path.join(outputDir, '{{dashCase componentName}}')

      actions.push({
        type: 'addMany',
        templateFiles: 'templates/package/**',
        destination: destinationPath,
        base: 'templates/package/',
        data: { description, componentName },
        abortOnFail: true
      })

      return actions
    }
  })

  const { runPrompts, runActions } = plop.getGenerator('component')

  const answers = await runPrompts()
  await runActions(answers)
}

async function run() {
  const OUTPUT_DIR = process.cwd()
  await createPackage(OUTPUT_DIR)
}

run()
