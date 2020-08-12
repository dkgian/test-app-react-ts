import * as React from 'react'
import { ProgressPlugin } from 'webpack'

interface Props {
  userName: string
}

export const HelloComponent = (props: Props) => {
  return <h2>hi, {props.userName}</h2>
}