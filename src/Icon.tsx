import React from 'react'

import { IconProps } from './IconProps'

export const Icon: IconProps = ({ children, ...rest }) => (
  <svg
    width='48'
    height='48'
    viewBox='0 0 28 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}>
    {children}
  </svg>
)
