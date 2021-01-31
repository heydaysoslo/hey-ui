import React from 'react'
import Spacer from '../Spacer/Spacer'
import Sticky, { Props } from './Sticky'

export default {
  title: 'Sticky',
  component: Sticky
}

export const Main: React.VFC<Props> = ({ top = '20px', from = 'xs' }) => (
  <div style={{ minHeight: '200vh' }}>
    <Spacer custom='200px' />
    <Sticky top={top} from={from}>
      <h1>I stick to the top if you scroll</h1>
    </Sticky>
  </div>
)
