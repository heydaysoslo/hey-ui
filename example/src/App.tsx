import React, { useState } from 'react'

import { Spacer, Button, Emoji, Stack, Sticky, Switch, Burger } from 'hey-ui'
import { ThemeProvider } from 'styled-components'
import theme from './styles/themes/defaultTheme'

const App = () => {
  const [isOn, setIsOn] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <Stack space='sm'>
        <Sticky top='0'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <Burger active={isOpen} />
          </button>
          <Switch state={isOn} onClick={() => setIsOn(!isOn)} />
          <p>
            <Emoji label='cry'>😭</Emoji>
          </p>
        </Sticky>
        <Spacer size='section' />
        <Button onClick={() => console.log('clicked')}>Hello</Button>
      </Stack>
    </ThemeProvider>
  )
}

export default App
