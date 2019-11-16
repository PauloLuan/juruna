import generator from './index'
describe('Generator', () => {
  it('run forest run', () => {
    generator.run()
  })
  
  it('should run the unit test', () => {
    console.log(generator.getDestinationFolder())
  })
})
