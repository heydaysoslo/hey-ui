import React from 'react'
import styled, { css } from 'styled-components'
import { applyModifier } from '../../../styles/utils/helpers'

type Modifiers = 'small'

type Props = {
  children: React.ReactNode
  className?: string
  modifiers?: Modifiers | Modifiers[] | undefined
}

const Button: React.FC<Props & React.HTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={className}
      onMouseDown={(e) => e.preventDefault()}
      {...props}
    >
      {children}
    </button>
  )
}

export default styled(Button)(
  ({ theme: t }) => css`
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
    ${t.fonts.h1()};
    ${t.spacing.section('mt')}

    [disabled] {
      opacity: 0.5;
      pointer-events: none;
    }

    &:hover {
      background-color: ${t.colors.background};
      color: ${t.colors.text};
      border-color: ${t.colors.primary};
    }

    ${applyModifier(
      'small',
      css`
        padding: 0;
      `
    )}
  `
)
