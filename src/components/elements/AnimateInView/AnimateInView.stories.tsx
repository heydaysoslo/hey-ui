import React from 'react'
import Emoji from '../Emoji/Emoji'
import AnimateInView, { Props } from './AnimateInView'

export default {
  title: 'Animation/AnimateInView',
  component: AnimateInView
}

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}

export const All: React.VFC<Props> = ({
  transition = 'fadeInUp',
  threshold,
  triggerOnce
}) => (
  <div>
    <div
      style={{
        ...styles,
        fontSize: '5vw'
      }}
    >
      <h1>
        <Emoji label='point down emoji'>👇</Emoji>
      </h1>
    </div>
    <AnimateInView
      transition={transition}
      threshold={threshold}
      triggerOnce={triggerOnce}
      onInView={(inView) => console.log(inView ? 'In view' : 'Out of view')}
    >
      <div style={styles}>
        <h1>{transition}</h1>
      </div>
    </AnimateInView>
  </div>
)
