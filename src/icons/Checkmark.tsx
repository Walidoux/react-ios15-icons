import classNames from 'classnames'
import React from 'react'

import type { IconProps } from '../IconProps'
export const Checkmark: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg
    width='15'
    height='16'
    viewBox='0 0 15 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={classNames('fill-current text-black dark:text-white', className)}
    {...rest}>
    <path
      d='M6.10938 15.093C6.46631 15.093 6.74854 14.9353 6.94775 14.6282L14.792 2.27661C14.9414 2.03589 14.9995 1.85327 14.9995 1.66235C14.9995 1.20581 14.7007 0.906982 14.2441 0.906982C13.9121 0.906982 13.7295 1.01489 13.5303 1.33032L6.07617 13.2087L2.20801 8.14526C2.00049 7.85474 1.79297 7.73853 1.49414 7.73853C1.021 7.73853 0.697266 8.06226 0.697266 8.5188C0.697266 8.70972 0.780273 8.92554 0.937988 9.12476L5.24609 14.6116C5.49512 14.9353 5.75244 15.093 6.10938 15.093Z'
      fill='currentColor'
    />
  </svg>
)
