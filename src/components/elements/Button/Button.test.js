import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from './Button'
import { ThemeProvider } from 'styled-components'
import theme from '../../../../example/src/styles/themes/defaultTheme'

test('Renders and displays text', () => {
  render(
    <ThemeProvider theme={theme}>
      <Button>Hello world</Button>
    </ThemeProvider>
  )
  expect(screen.getByRole('button')).toHaveTextContent(/hello world/i)
})

test('Not clickable when disabled', () => {
  const handleClick = jest.fn()
  render(
    <ThemeProvider theme={theme}>
      <Button disabled onClick={handleClick}>
        Hello world
      </Button>
    </ThemeProvider>
  )
  const button = screen.getByRole('button')
  fireEvent.click(button)
  fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' })
  expect(button).toHaveAttribute('disabled')
  expect(handleClick).toHaveBeenCalledTimes(0)
})

test('Make sure onClick fires when clicking', () => {
  const handleClick = jest.fn()
  render(
    <ThemeProvider theme={theme}>
      <Button onClick={handleClick}>Hello world</Button>
    </ThemeProvider>
  )
  const button = screen.getByRole('button')
  fireEvent.click(button)
  expect(handleClick).toHaveBeenCalledTimes(1)
})

// test('Make sure onClick fires when hitting enter', () => {
//   const handleClick = jest.fn()
//   render(
//     <ThemeProvider theme={theme}>
//       <Button onClick={handleClick}>Hello world</Button>
//     </ThemeProvider>
//   )
//   const button = screen.getByRole('button')
//   fireEvent.keyDown(button.focus(), { key: 'Enter', code: 'Enter' })
//   expect(handleClick).toHaveBeenCalledTimes(1)
// })
