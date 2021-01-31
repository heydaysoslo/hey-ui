import React from 'react'
import Switch, { Props } from './Switch'

export default {
  title: 'Switch',
  component: Switch
}

export const Main: React.VFC<Props> = ({ state, size, ...props }) => (
  <Switch state={state} size={size} {...props} />
)
