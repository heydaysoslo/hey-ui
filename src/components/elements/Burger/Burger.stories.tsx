import React from 'react'
import Burger, { Props } from './Burger'

export default {
  title: 'Burger',
  component: Burger
}

export const Main: React.VFC<Props> = ({ active, ...props }) => (
  <Burger active={active} {...props} />
)
