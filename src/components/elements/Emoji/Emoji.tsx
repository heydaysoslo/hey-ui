import React from 'react'

type Props = {
  /**
   * Name of emoji.
   */
  label: string
  /**
   * @example ```jsx
   * <Emoji label='cry'>😭</Emoji>
   * ```
   */
}

const Emoji: React.FC<Props> = ({ label, children }) => {
  return (
    <span role='img' aria-label={label}>
      {children}
    </span>
  )
}

export default Emoji
