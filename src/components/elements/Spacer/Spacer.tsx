import React from 'react'
import styled, { css } from 'styled-components'
import { SpacingSizes } from '../../../../example/src/styles/utilities/spacingFactory'

export type SpacerProps = {
  className?: string
  size?: SpacingSizes
  custom?: string
}

const Spacer: React.FC<SpacerProps> = ({ className }) => {
  return <div className={className} />
}

export default styled(Spacer)(
  ({ theme, size = 'md', custom }) => css`
    ${!custom && theme.spacing[size]('height')};
    ${custom && `height: ${custom}`};
  `
)
