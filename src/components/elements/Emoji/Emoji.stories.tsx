import React from 'react'
import { Stack } from '../../..'
import Emoji, { Props } from './Emoji'

export default {
  title: 'Emoji',
  component: Emoji,
  description: 'Accesible wrapper for Emojis',
  argTypes: {
    text: {
      control: 'text'
    }
  }
}

const emojis = {
  cry: '😭',
  fire: '🔥',
  muscle: '💪',
  eagle: '🦅'
}

export const Main: React.VFC<Props & { text: string }> = ({ label, text }) => (
  <div>
    <h1 style={{ fontSize: '5vw' }}>
      <Stack direction='row' space='sm'>
        {Object.entries(emojis).map(([name, emoji]) => (
          <Emoji key={name} label={`${name} emoji`}>
            {text || emoji}
          </Emoji>
        ))}
      </Stack>
    </h1>
  </div>
)
