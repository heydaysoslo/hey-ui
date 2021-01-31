import React from 'react'
import Animate, { Props } from './Animate'

export default {
  title: 'Animation/Animate',
  component: Animate
}

export const All: React.VFC<Props> = ({ type = 'fadeInUp' }) => (
  <Animate type={type}>
    <h1>{type}</h1>
  </Animate>
)
