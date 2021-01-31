import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  /**
   * State: Open or closed
   */
  active: boolean
  className?: string
  /**
   * Thickness of individual stroke in px
   * @note default 2
   */
  thickness?: number
  /**
   * Width of icon in px
   */
  width?: number
  /**
   * Height of icon in px
   */
  height?: number
  /**
   * Easing in as css string
   */
  easeIn?: string
  /**
   * Easing out as css string
   */
  easeOut?: string
}

const Burger: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <span className='box'>
        <span className='inner' />
      </span>
    </div>
  )
}

/*
Styling and transition logic based on "Squeeze" from https://jonsuh.com/hamburgers/
*/

export default styled(Burger)(
  ({
    theme,
    active,
    thickness = 2,
    width = 32,
    height = 24,
    easeIn = 'cubic-bezier(.55,.055,.675,.19)',
    easeOut = 'cubic-bezier(0.215, 0.61, 0.355, 1)'
  }) => css`
    // Make sure click-rect is big enough for usability
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;

    // Lines container
    .box {
      position: relative;
      display: block;
      width: ${width}px;
      height: ${height}px;
    }

    // Lines
    .inner,
    .inner:after,
    .inner:before {
      position: absolute;
      width: 100%;
      height: ${thickness}px;
      background-color: ${theme.colors.text};
    }

    .inner {
      transition-timing-function: ${easeIn};
      transition-duration: 75ms;
      top: 50%;
      display: block;
      margin-top: -${thickness / 2}px;
      :before,
      :after {
        display: block;
        content: '';
      }
      :before {
        transition: top 75ms ease 0.12s, opacity 75ms ease;
        top: -${height / 2 - thickness / 2}px;
      }
      :after {
        transition: bottom 75ms ease 0.12s, transform 75ms ${easeIn};
        bottom: -${height / 2 - thickness / 2}px;
      }
    }

    ${active &&
    css`
      .inner {
        transition-delay: 0.12s;
        transition-timing-function: ${easeOut};
        transform: rotate(45deg);
        :before {
          top: 0;
          transition: top 75ms ease, opacity 75ms ease 0.12s;
          opacity: 0;
        }
        :after {
          bottom: 0;
          transition: bottom 75ms ease, transform 75ms ${easeOut} 0.12s;
          transform: rotate(-90deg);
        }
      }
    `}
  `
)
