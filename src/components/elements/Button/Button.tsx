import React from 'react'
import styled, { css } from 'styled-components'
import { applyModifier } from '../../../styles/utils/helpers'

type Modifiers = 'small' | 'full'

export type Props = {
  children: React.ReactNode | React.ReactText
  modifiers?: Modifiers | Modifiers[] | undefined
  disabled?: boolean
}

const Button: React.FC<Props & React.HTMLAttributes<HTMLButtonElement>> = ({
  children,
  disabled,
  ...props
}) => {
  return (
    <Wrapper
      disabled={disabled}
      onMouseDown={(e) => e.preventDefault()}
      {...props}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.button<Props>(
  ({ theme: t, modifiers }) => css`
    appearance: none;
    background: none;
    display: inline-block;
    border: 2px solid transparent;
    background-color: ${t.colors.text};
    color: ${t.colors.background};
    font-size: 2rem;
    padding: 20px;
    transition: 0.15s ease background-color, color;
    cursor: pointer;
    ${modifiers && !modifiers.includes('small') && t.fonts.body()};
    border-radius: ${t.radius?.normal || '0px'};

    &:hover {
      background-color: ${t.colors.background};
      color: ${t.colors.text};
    }

    &[disabled],
    &[aria-disabled] {
      opacity: 0.5;
      pointer-events: none;
    }

    ${applyModifier(
      'small',
      css`
        padding: 0;
        ${t.fonts.small()};
      `
    )}
    ${applyModifier(
      'full',
      css`
        width: 100%;
      `
    )}
  `
)

export default Button
