import classNames from 'classnames'
import React from 'react'

import type { IconProps } from '../IconProps'

export const Play: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg
    width='22'
    height='23'
    viewBox='0 0 22 23'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={classNames('fill-current text-black dark:text-white', className)}
    {...rest}>
    <path
      d='M2.85156 22.7246C3.41016 22.7246 3.90527 22.5342 4.54004 22.166L19.6094 13.4316C20.7393 12.7842 21.2471 12.2383 21.2471 11.3623C21.2471 10.499 20.7393 9.95312 19.6094 9.29297L4.54004 0.558594C3.90527 0.19043 3.41016 0 2.85156 0C1.74707 0 0.921875 0.850586 0.921875 2.20898V20.5156C0.921875 21.8867 1.74707 22.7246 2.85156 22.7246Z'
      fill='currentColor'
    />
  </svg>
)
