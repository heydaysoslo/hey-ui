import React from 'react'
import { motion } from 'framer-motion'
import { transitions } from '../../../utilities/animation'
import type { transitions as transitionType } from '../../../types'

export type Props = {
  /**
   * Name of transition
   */
  type?: transitionType
  className?: string
}

const Animate: React.FC<Props> = ({
  className,
  children,
  type = 'fadeInUp'
}) => {
  return (
    <motion.div
      className={className}
      {...transitions[type]}
      exit={transitions[type].exit || transitions[type].initial}
    >
      {children}
    </motion.div>
  )
}

export default Animate
