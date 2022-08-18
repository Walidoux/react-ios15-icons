import classNames from 'classnames'
import React from 'react'

import type { IconProps } from '../IconProps'

export const Chevron: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg
    width='9'
    height='16'
    viewBox='0 0 9 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={classNames('fill-current text-black dark:text-white', className)}
    {...rest}>
    <path
      d='M9.00098 8C9.00098 7.79248 8.91797 7.60156 8.76025 7.45215L2.18604 1.01074C2.03662 0.869629 1.854 0.794922 1.63818 0.794922C1.21484 0.794922 0.882812 1.11865 0.882812 1.55029C0.882812 1.75781 0.96582 1.94873 1.09863 2.08984L7.1416 8L1.09863 13.9102C0.96582 14.0513 0.882812 14.2339 0.882812 14.4497C0.882812 14.8813 1.21484 15.2051 1.63818 15.2051C1.854 15.2051 2.03662 15.1304 2.18604 14.981L8.76025 8.54785C8.91797 8.39014 9.00098 8.20752 9.00098 8Z'
      fill='currentColor'
      fillOpacity={0.3}
    />
  </svg>
)
