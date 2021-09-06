import { ThemeProvider } from 'styled-components'
import { theme, CSSReset } from '@pauloluan/shared-ui'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <CSSReset />
    </ThemeProvider>
  )
]
