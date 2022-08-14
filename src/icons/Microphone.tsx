import React from 'react'

import type { IconProps } from '../IconProps'

export const Microphone: React.FC<IconProps> = ({ color, size, ...rest }) => (
  <svg
    width='12'
    height='18'
    viewBox='0 0 12 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='fill-current text-black dark:text-white'
    {...rest}>
    <path
      d='M6.06445 11.7227C7.71631 11.7227 8.82861 10.4858 8.82861 8.71777V3.16455C8.82861 1.38818 7.71631 0.159668 6.06445 0.159668C4.4043 0.159668 3.29199 1.38818 3.29199 3.16455V8.71777C3.29199 10.4858 4.4043 11.7227 6.06445 11.7227ZM0.121094 8.85059C0.121094 12.1045 2.271 14.3872 5.43359 14.6528V16.5869H2.354C2.00537 16.5869 1.72314 16.8691 1.72314 17.2178C1.72314 17.5664 2.00537 17.8403 2.354 17.8403H9.7666C10.1152 17.8403 10.3975 17.5664 10.3975 17.2178C10.3975 16.8691 10.1152 16.5869 9.7666 16.5869H6.68701V14.6528C9.85791 14.3872 11.9995 12.1045 11.9995 8.85059V7.16553C11.9995 6.81689 11.7256 6.54297 11.377 6.54297C11.0283 6.54297 10.7461 6.81689 10.7461 7.16553V8.80078C10.7461 11.6313 8.90332 13.5073 6.06445 13.5073C3.21729 13.5073 1.37451 11.6313 1.37451 8.80078V7.16553C1.37451 6.81689 1.10059 6.54297 0.743652 6.54297C0.39502 6.54297 0.121094 6.81689 0.121094 7.16553V8.85059Z'
      fill='currentColor'
      fillOpacity='0.6'
    />
  </svg>
)
