import template from './'

describe('templates controller', () => {
  describe('react', () => {
    it('getReactComponent:', () => {
      const teste = template.getReactComponent()
      console.log({ teste })
    })
  })
})
