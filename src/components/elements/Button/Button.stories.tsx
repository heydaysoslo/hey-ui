import React from 'react'
import Button from './Button'
import Stack from '../Stack/Stack'
import Emoji from '../Emoji/Emoji'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    text: {
      control: 'text'
    }
  }
}

export const Playground: React.VFC<{ text: string }> = ({ text, ...props }) => (
  <Button {...props}>{text || 'Button'}</Button>
)
export const AllVariants: React.VFC<{ text: string }> = ({ text }) => (
  <div style={{ minWidth: '500px' }}>
    <Stack space='xs'>
      <div>
        <Button>{text || 'Primary button'}</Button>
      </div>
      <div>
        <Button>
          <Stack space='xs' direction='row'>
            <Emoji label='fire'>🔥</Emoji>
            <span>{text || 'Icon button'}</span>
          </Stack>
        </Button>
      </div>
      <div>
        <Button>
          <Stack space='xs' direction='row'>
            <span>{text || 'Icon button'}</span>
            <Emoji label='fire'>🔥</Emoji>
          </Stack>
        </Button>
      </div>
      <div>
        <Button>
          <Emoji label='fire'>🔥</Emoji>
        </Button>
      </div>
      <div>
        <Button modifiers='small'>{text || 'Small button'}</Button>
      </div>
      <div>
        <Button modifiers='full'>{text || 'Full button'}</Button>
      </div>
      <div>
        <Button disabled>{text || 'Disabled button'}</Button>
      </div>
      <div>
        <Button disabled modifiers='small'>
          {text || 'Small disabled button'}
        </Button>
      </div>
    </Stack>
  </div>
)

export const Primary: React.VFC<{ text: string }> = ({ text }) => (
  <Button>{text || 'Button'}</Button>
)
export const Small: React.VFC<{ text: string }> = ({ text }) => (
  <Button modifiers='small'>{text || 'Button'}</Button>
)
export const Full: React.VFC<{ text: string }> = ({ text }) => (
  <Button modifiers='full'>{text || 'Button'}</Button>
)
export const Disabled: React.VFC<{ text: string }> = ({ text }) => (
  <Button disabled>{text || 'Button'}</Button>
)
export const SmallDisabled: React.VFC<{ text: string }> = ({ text }) => (
  <Button disabled modifiers='small'>
    {text || 'Button'}
  </Button>
)

export const IconButton: React.VFC<{ text: string }> = ({ text }) => (
  <Stack space='xs'>
    <div>
      <Button>
        <Stack space='xs' direction='row'>
          <span>{text || 'Button'}</span>
          <Emoji label='fire'>🔥</Emoji>
        </Stack>
      </Button>
    </div>
    <div>
      <Button>
        <Stack space='xs' direction='row'>
          <Emoji label='fire'>🔥</Emoji>
          <span>{text || 'Button'}</span>
        </Stack>
      </Button>
    </div>
    <div>
      <Button>
        <Emoji label='fire'>🔥</Emoji>
      </Button>
    </div>
  </Stack>
)
