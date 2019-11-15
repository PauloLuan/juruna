import meow from 'meow'
import { head } from 'lodash'
import juruna from './'

const cli = meow(
  `
Usage
  $ juruna [moduleName]

Options
  --react. -r the type of project (could be node or react) [Default: react]
  --component, -c  the type of generated resource [Default: component]

Examples
  $ juruna MyAwesomeComponent --react --component
`,
  {
    flags: {
      react: {
        type: 'boolean',
        alias: 'r'
      },
      component: {
        type: 'boolean',
        alias: 'c'
      }
    }
  }
)

const inputComponentName = head(cli.input)
juruna.run(inputComponentName, cli.flags)
