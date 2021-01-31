import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import Emoji from '../Emoji/Emoji'

export type Props = {
  state: boolean
  size?: number
}

const Switch: React.FC<Props & React.HTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  state,
  size = 150
}) => {
  return (
    <StyledSwitch
      size={size}
      onClick={onClick}
      onMouseDown={(e) => e.preventDefault()}
    >
      <motion.div
        className='inner'
        animate={
          state ? { background: 'darkslategray' } : { background: 'cornsilk' }
        }
      >
        <motion.div
          className='switch'
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 1.1 }}
          animate={state ? { x: size - size / 2.2 } : { x: 0 }}
        >
          <Emoji label='moon emoji'>{state ? '🌚' : '🌝'}</Emoji>
        </motion.div>
      </motion.div>
    </StyledSwitch>
  )
}

const StyledSwitch = styled.button<
  { size: number } & React.HTMLAttributes<HTMLButtonElement>
>(
  ({ size = 150 }) => css`
    font-size: ${size / 2.2}px;
    line-height: 1.1;
    display: flex;

    .inner {
      width: ${size}px;
      border-radius: ${size / 2.2}px;
      margin: 0 ${size / 4};
    }

    .switch {
      position: relative;
      width: ${size / 2.2}px;
      height: ${size / 2.2}px;
      border-radius: ${size / 2.2}px;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(-50%);
        height: 100%;
        width: ${size * 2}px;
        z-index: -1;
      }
    }
  `
)

export default Switch
