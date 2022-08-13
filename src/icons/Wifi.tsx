import React from 'react'

import { WifiProps } from '../IconProps'

export const Wifi: React.FC<WifiProps> = ({ internet }) => (
  <svg
    width='16'
    height='12'
    viewBox='0 0 16 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    display={internet !== 'noWifi' ? 'block' : 'none'}
    className='fill-current text-black dark:text-white'>
    <path
      d='M8.30043 2.69635C10.5348 2.69645 12.6838 3.55501 14.3032 5.09456C14.4251 5.21342 14.62 5.21192 14.7401 5.0912L15.9058 3.91479C15.9666 3.85356 16.0005 3.77062 16 3.68432C15.9995 3.59803 15.9646 3.51549 15.9031 3.45498C11.6528 -0.618333 4.9474 -0.618333 0.697078 3.45498C0.635507 3.51544 0.600578 3.59796 0.600013 3.68425C0.599439 3.77055 0.633289 3.85351 0.694053 3.91479L1.86006 5.0912C1.98007 5.21211 2.17514 5.21361 2.29701 5.09456C3.91658 3.5549 6.0658 2.69635 8.30043 2.69635Z'
      fill='currentColor'
      opacity={internet !== 'fast' ? '0.2' : '1'}
    />
    <path
      d='M8.30043 6.52374C9.5281 6.52366 10.7119 6.97998 11.622 7.80402C11.745 7.92097 11.9389 7.91843 12.0589 7.7983L13.2232 6.62189C13.2845 6.56018 13.3186 6.47647 13.3177 6.38948C13.3168 6.3025 13.2811 6.2195 13.2185 6.15905C10.4474 3.58131 6.15585 3.58131 3.38469 6.15905C3.32209 6.2195 3.28638 6.30254 3.28556 6.38955C3.28473 6.47657 3.31888 6.56027 3.38032 6.62189L4.5443 7.7983C4.66428 7.91843 4.85817 7.92097 4.98125 7.80402C5.89066 6.98052 7.07357 6.52425 8.30043 6.52374Z'
      fill='currentColor'
      opacity={internet !== 'normal' && internet !== 'fast' ? '0.2' : '1'}
    />
    <path
      d='M10.538 9.33134C10.6002 9.27023 10.6345 9.18613 10.6327 9.0989C10.631 9.01167 10.5933 8.92904 10.5286 8.87052C9.24233 7.78262 7.35852 7.78262 6.07229 8.87052C6.00754 8.929 5.96978 9.0116 5.96793 9.09883C5.96608 9.18606 6.00032 9.27018 6.06254 9.33134L8.07691 11.3639C8.13595 11.4236 8.21643 11.4572 8.30043 11.4572C8.38442 11.4572 8.4649 11.4236 8.52394 11.3639L10.538 9.33134Z'
      fill='currentColor'
      opacity={
        internet !== 'slow' && internet !== 'fast' && internet !== 'normal'
          ? '0.2'
          : '1'
      }
    />
  </svg>
)
