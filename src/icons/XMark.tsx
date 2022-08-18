import classNames from 'classnames'
import React from 'react'

import type { IconProps } from '../IconProps'

export const XMark: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg
    width='22'
    height='21'
    viewBox='0 0 22 21'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={classNames('fill-current text-black dark:text-white', className)}
    {...rest}>
    <path
      d='M1.17471 18.9884C0.724451 19.4387 0.711208 20.2069 1.17471 20.6573C1.63821 21.1076 2.4063 21.1076 2.85656 20.6573L11.332 12.1805L19.8075 20.6573C20.2578 21.1076 21.0391 21.1208 21.4894 20.6573C21.9396 20.1937 21.9396 19.4387 21.4894 18.9884L13.0139 10.4983L21.4894 2.02154C21.9396 1.57121 21.9529 0.802996 21.4894 0.352666C21.0259 -0.110909 20.2578 -0.110909 19.8075 0.352666L11.332 8.82947L2.85656 0.352666C2.4063 -0.110909 1.62497 -0.124155 1.17471 0.352666C0.724451 0.816241 0.724451 1.57121 1.17471 2.02154L9.65018 10.4983L1.17471 18.9884Z'
      fill='currentColor'
      fillOpacity='0.6'
    />
  </svg>
)
