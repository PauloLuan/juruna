import execa from 'execa'
import path from 'path'

const SUCRASE_NODE = './node_modules/.bin/sucrase-node'
const LIB_PATH = './lib/cli.js'

describe('CLI tests', () => {
  it('should call the cli with react params', async () => {
    try {
      const PROJECT_NAME = 'teste'
      const { stdout } = await execa(SUCRASE_NODE, [
        LIB_PATH,
        PROJECT_NAME,
        '--react'
      ])

      console.log(stdout)
    } catch (error) {
      console.log(error)
    }
  })
})
