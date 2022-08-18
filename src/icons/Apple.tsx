import classNames from 'classnames'
import React from 'react'

import type { IconProps } from '../IconProps'

export const Apple: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg
    width='14'
    height='17'
    viewBox='0 0 14 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={classNames('fill-current text-black dark:text-white', className)}
    {...rest}>
    <path
      d='M9.11035 2.96387C9.6167 2.34961 9.97363 1.51123 9.97363 0.664551C9.97363 0.54834 9.96533 0.432129 9.94873 0.34082C9.11865 0.374023 8.12256 0.888672 7.5332 1.58594C7.06006 2.11719 6.62842 2.96387 6.62842 3.81055C6.62842 3.94336 6.65332 4.06787 6.66162 4.10938C6.71143 4.11768 6.79443 4.13428 6.88574 4.13428C7.62451 4.13428 8.5542 3.63623 9.11035 2.96387ZM9.69141 4.30859C8.45459 4.30859 7.44189 5.06396 6.79443 5.06396C6.10547 5.06396 5.20898 4.3584 4.12988 4.3584C2.07959 4.3584 0.00439453 6.05176 0.00439453 9.23926C0.00439453 11.2314 0.768066 13.3315 1.72266 14.6846C2.53613 15.8301 3.25 16.7681 4.2793 16.7681C5.29199 16.7681 5.74023 16.0957 7.00195 16.0957C8.28027 16.0957 8.5708 16.7515 9.69141 16.7515C10.8037 16.7515 11.5425 15.7305 12.248 14.7261C13.0283 13.5723 13.3604 12.4517 13.3687 12.3936C13.3022 12.377 11.1772 11.5054 11.1772 9.07324C11.1772 6.96484 12.8457 6.01855 12.9453 5.94385C11.8413 4.3584 10.1562 4.30859 9.69141 4.30859Z'
      fill='currentColor'
    />
  </svg>
)
