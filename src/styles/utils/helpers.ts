import { FlattenSimpleInterpolation, DefaultTheme } from 'styled-components'

type applyModifier = (
  modifier: string,
  css: FlattenSimpleInterpolation
) => (args: {
  theme: DefaultTheme
  modifiers?: string[] | string | null | undefined
}) => FlattenSimpleInterpolation | null

export const applyModifier: applyModifier = (modifier, css) => ({
  modifiers
}) => {
  if (!modifiers) return null
  return modifiers === modifier || modifiers.includes(modifier) ? css : null
}
