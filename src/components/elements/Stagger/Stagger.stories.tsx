import React from 'react'
import Stagger, { Props } from './Stagger'

export default {
  title: 'Animation/Stagger',
  component: Stagger
}

export const All: React.VFC<Props> = ({ type }) => (
  <Stagger type={type}>
    <h1>One</h1>
    <h1>Two</h1>
    <h1>Three</h1>
    <h1>Four</h1>
  </Stagger>
)
