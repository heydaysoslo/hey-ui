import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/themes/defaultTheme'
import darkTheme from '../src/styles/themes/darkTheme'
import { addParameters, addDecorator } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const removeUnwantedKeys = (theme) => {
  const unWantedKeys = [
    'spacing',
    'bp',
    'responsiveSpacing',
    'spacingUnit',
    'responsiveFonts',
    'breakpoints',
    'elevation',
    'fonts'
  ]
  return Object.entries(theme).reduce((newTheme, [key, value]) => {
    if (!unWantedKeys.includes(key)) {
      newTheme[key] = value
    }
    return newTheme
  }, {})
}

addParameters({
  layout: 'centered',
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  backgrounds: {
    values: Object.entries(theme.colors).reduce((res, [name, value]) => {
      res.push({
        name,
        value
      })
      return res
    }, [])
  },
  themePlayground: {
    theme: [
      { name: 'Default Theme', theme: removeUnwantedKeys(theme) },
      { name: 'Dark Theme', theme: removeUnwantedKeys(darkTheme) }
    ],
    provider: ThemeProvider
  },
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
})

addDecorator((Story) => {
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
})

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark']
    }
  }
}
