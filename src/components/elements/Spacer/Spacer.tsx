import styled, { css } from 'styled-components'
import { SpacingSizes } from '../../../../example/src/styles/utilities/spacingFactory'

export type Props = {
  size?: SpacingSizes
  custom?: string
}

const Spacer = styled.div<Props>(
  ({ theme, size = 'md', custom }) => css`
    ${!custom && theme.spacing[size]('size')};
    ${custom &&
    css`
      height: ${custom};
      width: ${custom};
    `};
  `
)

export default Spacer
