import path from 'path'
import { readdirSync, readFileSync } from 'fs'

export default {
  getTemplates (tech) {
    switch (tech) {
      case 'react':
        return this.getReactComponent()
      default:
        return []
    }
  },

  getReactComponent () {
    const reactComponentsPath = path.join(__dirname, 'react/component')
    const files = readdirSync(reactComponentsPath)
    return files.map(function (fileName) {
      const fileContent = readFileSync(path.join(reactComponentsPath, fileName))
      return { fileName, fileContent }
    })
  }
}
