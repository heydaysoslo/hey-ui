import React from 'react'

import { ExampleComponent, Button } from 'hey-ui'
import 'hey-ui/dist/index.css'
import { ThemeProvider } from 'styled-components'
import theme from './styles/themes/defaultTheme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>Hello</Button>
      <ExampleComponent text='Create React Library Example 😄' />
    </ThemeProvider>
  )
}

export default App
