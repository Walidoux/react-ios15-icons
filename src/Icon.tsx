import classNames from 'classnames'
import React from 'react'

import { IconProps } from './IconProps'

export const Icon: IconProps = ({ children, className, ...rest }) => (
  <svg
    width='35'
    height='35'
    viewBox='0 0 28 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={classNames(className, 'text-black dark:text-white')}
    {...rest}>
    {children}
  </svg>
)
