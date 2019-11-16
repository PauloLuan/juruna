import path from 'path'
import { mkdirSync } from 'fs'
import { getTemplates } from '../templates'

export default {
  run (projectName, params) {
    console.log({ projectName, params })
  },

  getCurrentSourceFolder () {
    return __dirname
  },

  getDestinationFolderPath: componentName => {
    const DESTINATION_PATH = path.join(
      path.basename(process.cwd()),
      componentName
    )
    return DESTINATION_PATH
  },

  createDestinationFolder: componentName => {
    const DESTINATION_PATH = this.getDestinationFolderPath(componentName)
    return mkdirSync(DESTINATION_PATH)
  }
}
