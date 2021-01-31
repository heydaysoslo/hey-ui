import styled, { css } from 'styled-components'
import { BreakpointKeys } from '../../../../example/src/styles/utilities/breakpointsFactory'

export type Props = {
  /**
   * css value determines when to stick from top.
   *
   * @example var(--header-height) | 20px | 50rem
   */
  top?: string
  /**
   * @note defaults to xs
   */
  from?: BreakpointKeys
}

const Sticky = styled.div<Props>(
  ({ theme, top = '0px', from = 'xs' }) => css`
    ${theme.bp[from]} {
      position: sticky;
    }
    ${top
      ? css`
          top: ${top};
        `
      : css`
          top: 0;
        `}
  `
)

export default Sticky
