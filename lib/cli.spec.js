import execa from 'execa'

const SUCRASE_NODE = './node_modules/.bin/sucrase-node'
const LIB_PATH = './lib/cli.js'

describe('CLI tests', () => {
  it('should call the cli with react params', async () => {
    const { stdout } = await execa(SUCRASE_NODE, [LIB_PATH, '--help'])
    expect(stdout).toContain('Javascript scaffold code generator')
  })
})
