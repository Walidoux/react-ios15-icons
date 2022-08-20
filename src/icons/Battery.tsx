import React from 'react'

import { Icon } from '../Icon'
import type { BatteryProps, IconProps } from '../IconProps'

export const Battery: IconProps<BatteryProps> = ({
  progression,
  className,
  ...rest
}) => (
  <Icon className={className} {...rest}>
    <path
      opacity='0.35'
      d='M5.58944 8H20.4106C21.6587 8 22.1113 8.12996 22.5676 8.37398C23.0239 8.61801 23.382 8.97612 23.626 9.43242C23.87 9.88872 24 10.3413 24 11.5894V15.9106C24 17.1587 23.87 17.6113 23.626 18.0676C23.382 18.5239 23.0239 18.882 22.5676 19.126C22.1113 19.37 21.6587 19.5 20.4106 19.5H5.58944C4.34131 19.5 3.88871 19.37 3.43242 19.126C2.97612 18.882 2.61802 18.5239 2.37399 18.0676C2.12996 17.6113 2 17.1587 2 15.9106V11.5894C2 10.3413 2.12996 9.88872 2.37399 9.43242C2.61802 8.97612 2.97612 8.61801 3.43242 8.37398C3.88871 8.12996 4.34131 8 5.58944 8ZM5.58944 9C4.60246 9 4.2579 9.06654 3.90401 9.2558C3.62199 9.40663 3.40663 9.62199 3.2558 9.90402C3.06654 10.2579 3 10.6025 3 11.5894V15.9106C3 16.8975 3.06654 17.2421 3.2558 17.596C3.40663 17.878 3.62199 18.0934 3.90401 18.2442C4.2579 18.4335 4.60246 18.5 5.58944 18.5H20.4106C21.3975 18.5 21.7421 18.4335 22.096 18.2442C22.378 18.0934 22.5934 17.878 22.7442 17.596C22.9335 17.2421 23 16.8975 23 15.9106V11.5894C23 10.6025 22.9335 10.2579 22.7442 9.90402C22.5934 9.62199 22.378 9.40663 22.096 9.2558C21.7421 9.06654 21.3975 9 20.4106 9H5.58944ZM26.5 13.69C26.5 14.9266 25 15.69 25 15.69V11.69C25 11.69 26.5 12.4534 26.5 13.69Z'
      fill='black'
    />
    <rect
      x='4'
      y='10'
      rx='1'
      height='7.5'
      width={(progression / 100) * 18}
      fill={
        progression <= 10
          ? 'red'
          : progression <= 20
          ? 'orange'
          : 'currentColor'
      }
    />
  </Icon>
)
