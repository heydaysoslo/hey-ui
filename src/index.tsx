import * as React from 'react'
import styled, { css } from 'styled-components'

import Button from './components/elements/Button'

interface Props {
  text: string
}

const Wrapper = styled.div(
  ({ theme }) => css`
    ${theme.spacing.md('my')};
    background: ${theme.colors.background};
  `
)

export const ExampleComponent = ({ text }: Props) => {
  return <Wrapper>Example Component hello: {text}</Wrapper>
}

export { Button }
