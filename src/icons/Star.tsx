import React from 'react'

import { IconProps } from '../IconProps'

export const Star: React.FC<IconProps> = ({ color, size, ...rest }) => (
  <svg
    width='19'
    height='18'
    viewBox='0 0 19 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='fill-current text-black dark:text-white'
    {...rest}>
    <path
      d='M4.10334 17.6562C4.44367 17.9219 4.87531 17.8306 5.38996 17.457L9.78107 14.228L14.1805 17.457C14.6951 17.8306 15.1185 17.9219 15.4671 17.6562C15.8074 17.3989 15.8821 16.9756 15.6746 16.3696L13.9398 11.2065L18.3724 8.01904C18.887 7.65381 19.0945 7.27197 18.9617 6.85693C18.8289 6.4585 18.4388 6.25928 17.7996 6.26758L12.3626 6.30078L10.7108 1.11279C10.5115 0.498535 10.2127 0.191406 9.78107 0.191406C9.35773 0.191406 9.0589 0.498535 8.85968 1.11279L7.20783 6.30078L1.77082 6.26758C1.13166 6.25928 0.74152 6.4585 0.608708 6.85693C0.467595 7.27197 0.683415 7.65381 1.19806 8.01904L5.63068 11.2065L3.89582 16.3696C3.6883 16.9756 3.763 17.3989 4.10334 17.6562ZM5.29865 16.0127C5.28205 15.9961 5.29035 15.9878 5.29865 15.938L6.9505 11.1899C7.06672 10.8662 7.00031 10.6089 6.70978 10.4097L2.57599 7.5542C2.53449 7.5293 2.52619 7.5127 2.53449 7.48779C2.54279 7.46289 2.55939 7.46289 2.6092 7.46289L7.63117 7.5542C7.9715 7.5625 8.18732 7.42139 8.29523 7.08105L9.73957 2.2749C9.74787 2.2251 9.76447 2.2085 9.78107 2.2085C9.80597 2.2085 9.82258 2.2251 9.83088 2.2749L11.2752 7.08105C11.3831 7.42139 11.5989 7.5625 11.9393 7.5542L16.9612 7.46289C17.0111 7.46289 17.0277 7.46289 17.036 7.48779C17.0443 7.5127 17.0277 7.5293 16.9944 7.5542L12.8607 10.4097C12.5701 10.6089 12.5037 10.8662 12.6199 11.1899L14.2718 15.938C14.2801 15.9878 14.2884 15.9961 14.2718 16.0127C14.2552 16.0376 14.2303 16.021 14.1971 15.9961L10.2044 12.9497C9.93879 12.7422 9.63166 12.7422 9.36603 12.9497L5.37336 15.9961C5.34015 16.021 5.31525 16.0376 5.29865 16.0127Z'
      fill='currentColor'
    />
  </svg>
)
