import nodePlop, { ActionType } from 'node-plop'
import shell from 'shelljs'
import capitalize from 'lodash/capitalize'
import camelCase from 'lodash/camelCase'
import path from 'path'

const plop = nodePlop('generators/plopfile.hbs')

const workspaces = ['packages', 'packages/utils'] as const

type Workspace = typeof workspaces[number]

interface Answers {
  componentName: string
  description: string
  outDir: Workspace
}

async function createPackage() {
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

      const destinationPath = path.join(
        __dirname,
        '../packages/',
        '{{dashCase componentName}}'
      )

      actions.push({
        type: 'addMany',
        templateFiles: 'package/**',
        destination: destinationPath,
        base: 'package/',
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
  await createPackage()
  shell.exec('yarn')
}

run()
