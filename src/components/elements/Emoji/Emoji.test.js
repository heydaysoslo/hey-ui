import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Emoji from './Emoji'

test('Renders and displays text', () => {
  render(<Emoji label='cry'>😭</Emoji>)
  expect(screen.getByText('😭')).toHaveTextContent(/😭/i)
})

test('Has appropriate accesibility attributes and values', () => {
  render(<Emoji label='cry'>😭</Emoji>)
  expect(screen.getByText('😭')).toHaveAttribute('aria-label', 'cry')
  expect(screen.getByText('😭')).toHaveAttribute('role', 'img')
})
