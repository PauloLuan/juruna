import execa from 'execa'

describe.skip('cli', () => {
  it('should do the shit', async () => {
    try {
      const { stdout } = await execa('echo', ['--version', '--help'])
      console.log(stdout)
    } catch (e) {
      console.log(e)
    }
  })
})
