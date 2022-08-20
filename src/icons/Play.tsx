import React from 'react'

import { Icon } from '../Icon'
import type { DisableProp, IconProps } from '../IconProps'

export const Play: IconProps<DisableProp, true> = ({
  className,
  disabled,
  filled,
  ...rest
}) => (
  <Icon className={className} {...rest}>
    {(disabled === false || disabled == null) && (
      <path
        fill='currentColor'
        d={`M9.32422 21.3711C9.69336 21.3711 10.0186 21.2393 10.4229 21.002L20.8027 14.999C21.5586 14.5596 21.875 14.2168 21.875 13.6631C21.875 13.1094 21.5586 12.7754 20.8027 12.3271L10.4229 6.32422C10.0186 6.08691 9.69336 5.95508 9.32422 5.95508C8.60352 5.95508 8.09375 6.50879 8.09375 7.37891V19.9473C8.09375 20.8262 8.60352 21.3711 9.32422 21.3711Z ${
          filled === false || filled == null
            ? 'M9.97461 19.1914C9.93066 19.1914 9.89551 19.1475 9.89551 19.0859V8.24023C9.89551 8.16992 9.93066 8.13477 9.97461 8.13477C10.0098 8.13477 10.0449 8.15234 10.0801 8.17871L19.4141 13.5664C19.4492 13.5928 19.4844 13.6191 19.4844 13.6631C19.4844 13.707 19.4492 13.7334 19.4141 13.7598L10.0801 19.1475C10.0449 19.1738 10.0098 19.1914 9.97461 19.1914Z'
            : ''
        }`}
      />
    )}

    {disabled === true && (
      <path
        fill='currentColor'
        d={
          filled === false || filled == null
            ? 'M19.8623 20.4482C20.1348 20.7207 20.5918 20.7207 20.8555 20.4482C21.1191 20.167 21.1279 19.7275 20.8555 19.4551L7.41699 6.02539C7.14453 5.75293 6.69629 5.75293 6.41504 6.02539C6.15137 6.28906 6.15137 6.75488 6.41504 7.01855L19.8623 20.4482ZM19.001 16.0449L20.8027 14.999C21.5586 14.5596 21.875 14.2168 21.875 13.6631C21.875 13.1094 21.5586 12.7754 20.8027 12.3271L10.4229 6.32422C10.0098 6.08691 9.59668 5.95508 9.20117 6.00781L13.0684 9.90137L19.4141 13.5664C19.4492 13.5928 19.4844 13.6191 19.4844 13.6631C19.4844 13.707 19.4492 13.7334 19.4141 13.7598L17.709 14.7529L19.001 16.0449ZM15.7666 17.917L14.4658 16.6162L10.0801 19.1475C10.0449 19.1738 10.0098 19.1914 9.97461 19.1914C9.93066 19.1914 9.89551 19.1475 9.89551 19.0859V12.0459L8.09375 10.2354V19.9473C8.09375 20.8262 8.60352 21.3711 9.32422 21.3711C9.69336 21.3711 10.0186 21.2393 10.4229 21.002L15.7666 17.917Z'
            : 'M19.8799 20.4482C20.1523 20.7207 20.6094 20.7207 20.873 20.4482C21.1367 20.167 21.1455 19.7275 20.873 19.4551L7.43457 6.02539C7.16211 5.75293 6.71387 5.75293 6.43262 6.02539C6.16895 6.28906 6.16895 6.75488 6.43262 7.01855L19.8799 20.4482ZM19.0186 16.0449L20.8203 14.999C21.5762 14.5596 21.8926 14.2168 21.8926 13.6631C21.8926 13.1094 21.5762 12.7754 20.8203 12.3271L10.4404 6.32422C10.0713 6.10449 9.77246 5.96387 9.44727 5.96387C9.30664 5.96387 9.18359 6.04297 9.12207 6.15723L19.0186 16.0449ZM15.7842 17.917L8.11133 10.2441V19.9473C8.11133 20.8262 8.62109 21.3711 9.3418 21.3711C9.71094 21.3711 10.0361 21.2393 10.4404 21.002L15.7842 17.917Z'
        }
      />
    )}
  </Icon>
)
