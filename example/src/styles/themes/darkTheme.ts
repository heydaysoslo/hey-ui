import { css, DefaultTheme } from 'styled-components'
import defaultTheme from './defaultTheme'

const theme: DefaultTheme = {
  ...defaultTheme,
  colors: {
    primary: 'green',
    secondary: 'orange',
    text: 'blue',
    border: 'red',
    background: 'rgba(0,0,0,.8)'
  },
  defaultStyle: ({ theme }) => css`
    body {
      background: ${theme?.colors?.background};
    }
  `
}

export default theme
