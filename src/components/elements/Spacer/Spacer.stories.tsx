import React, { useEffect, useRef, useState } from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import Spacer, { Props } from './Spacer'

export default {
  title: 'Spacer',
  component: Spacer
}

const Wrapper = styled.div`
  h2 {
    text-align: center;
    font-weight: normal;
  }
  p {
    margin-top: 0.5rem;
  }
`

const MeasureBox = ({
  i,
  size,
  custom
}: {
  i: number
  size: Props['size']
  custom: string
}) => {
  const box = useRef<HTMLDivElement>(null)
  const [measure, setMeasure] = useState(0)
  useEffect(() => {
    if (box.current) {
      setMeasure(box.current.getBoundingClientRect().width)
    }
  }, [box])
  return (
    <div>
      <div
        ref={box}
        style={{
          display: 'inline-block',
          backgroundColor: `hsl(${Math.sin(i * 20) * 180}, 50%, 50%)`
        }}
      >
        {/* @ts-ignore */}
        <Spacer size={custom ? null : size} custom={custom} />
      </div>
      <p>
        {custom ? 'Custom' : size} ({measure}x{measure})
      </p>
    </div>
  )
}

export const All: React.VFC<Props> = (_) => (
  <Wrapper>
    <ThemeConsumer>
      {(theme) => (
        <div>
          {Object.keys(theme.spacing).map((key, i) => (
            // @ts-ignore
            <MeasureBox key={key} i={i} size={key} />
          ))}
        </div>
      )}
    </ThemeConsumer>
  </Wrapper>
)

export const Playground: React.VFC<Props> = ({ size = 'lg', custom }) => (
  <Wrapper>
    {/* @ts-ignore */}
    <MeasureBox i={2} size={size} custom={custom} />
  </Wrapper>
)
