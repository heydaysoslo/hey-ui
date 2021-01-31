import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Spacer from './Spacer'
import { ThemeProvider } from 'styled-components'
import theme from '../../../../example/src/styles/themes/defaultTheme'

test('Check that it renders', () => {
  render(
    <ThemeProvider theme={theme}>
      <Spacer />
    </ThemeProvider>
  )
})

test('Check that it renders with props', () => {
  render(
    <ThemeProvider theme={theme}>
      <Spacer size='sm' />
    </ThemeProvider>
  )
})
