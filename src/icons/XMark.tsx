import React from 'react'

import { Icon } from '../Icon'
import type { IconProps } from '../IconProps'

export const XMark: IconProps = ({ className, ...rest }) => (
  <Icon className={className} {...rest}>
    <path
      fill='currentColor'
      d='M7.18836 19.0508C6.81922 19.4199 6.80165 20.0791 7.19715 20.4658C7.58387 20.8525 8.24305 20.8438 8.61219 20.4746L13.9911 15.0869L19.3788 20.4746C19.7567 20.8525 20.4071 20.8525 20.7938 20.4658C21.1718 20.0703 21.1806 19.4287 20.7938 19.0508L15.4149 13.6631L20.7938 8.28419C21.1806 7.90626 21.1806 7.25587 20.7938 6.86915C20.3983 6.49122 19.7567 6.48243 19.3788 6.86036L13.9911 12.2481L8.61219 6.86036C8.24305 6.49122 7.57508 6.47364 7.19715 6.86915C6.81043 7.25587 6.81922 7.91505 7.18836 8.28419L12.5761 13.6631L7.18836 19.0508Z'
    />
  </Icon>
)
