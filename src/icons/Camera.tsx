import React from 'react'

import { Icon } from '../Icon'
import type { IconProps } from '../IconProps'

export const Camera: IconProps<unknown, true> = ({
  className,
  filled,
  ...rest
}) => (
  <Icon className={className} {...rest}>
    <path
      d={
        filled === false || filled == null
          ? 'M6.01953 21.8809H21.9629C23.8613 21.8809 24.8633 20.8965 24.8633 19.0156V9.78711C24.8633 7.90625 23.8613 6.92188 21.9629 6.92188 H19.5635C18.8779 6.92188 18.6582 6.80762 18.2275 6.35938L17.5332 5.6123C17.0762 5.12891 16.6104 4.8916 15.7139 4.8916H12.2246C11.3281 4.8916 10.8711 5.12891 10.4053 5.6123L9.71094 6.35938C9.28906 6.79883 9.06055 6.92188 8.375 6.92188H6.01953C4.12109 6.92188 3.12793 7.90625 3.12793 9.78711V19.0156C3.12793 20.8965 4.12109 21.8809 6.01953 21.8809ZM6.13379 20.1318C5.33398 20.1318 4.87695 19.71 4.87695 18.8574V9.94531C4.87695 9.10156 5.33398 8.67969 6.13379 8.67969H8.88477C9.67578 8.67969 10.0801 8.53906 10.5283 8.05566L11.1963 7.31738C11.6885 6.78125 11.9521 6.64062 12.7256 6.64062H15.2129C15.9863 6.64062 16.25 6.78125 16.7334 7.30859L17.4102 8.05566C17.8584 8.53906 18.2627 8.67969 19.0537 8.67969H21.8486C22.6572 8.67969 23.1055 9.10156 23.1055 9.94531V18.8574C23.1055 19.71 22.6572 20.1318 21.8486 20.1318H6.13379ZM13.9912 18.9717C16.6279 18.9717 18.7373 16.8623 18.7373 14.2168C18.7373 11.5713 16.6279 9.46191 13.9912 9.46191C11.3633 9.46191 9.25391 11.5713 9.25391 14.2168C9.25391 16.8623 11.3633 18.9717 13.9912 18.9717ZM19.0361 11.0703C19.0361 11.7119 19.5547 12.2129 20.1875 12.2041C20.8027 12.2041 21.3213 11.7031 21.3213 11.0703C21.3213 10.4551 20.7939 9.92773 20.1875 9.92773C19.5547 9.92773 19.0361 10.4551 19.0361 11.0703ZM13.9912 17.3721C12.2598 17.3721 10.8447 15.9658 10.8447 14.2168C10.8447 12.459 12.251 11.0615 13.9912 11.0615C15.7402 11.0615 17.1465 12.459 17.1465 14.2168C17.1465 15.9658 15.7402 17.3721 13.9912 17.3721Z'
          : 'M6.01953 21.8809H21.9629C23.8613 21.8809 24.8633 20.8965 24.8633 19.0156V9.78711C24.8633 7.90625 23.8613 6.92188 21.9629 6.92188 H19.625C18.9395 6.92188 18.7197 6.80762 18.2891 6.35938L17.5947 5.6123C17.1377 5.12891 16.6719 4.8916 15.7754 4.8916H12.1631C11.2666 4.8916 10.8008 5.12891 10.3438 5.6123L9.64941 6.35938C9.22754 6.79883 8.99902 6.92188 8.31348 6.92188H6.01953C4.12109 6.92188 3.12793 7.90625 3.12793 9.78711V19.0156C3.12793 20.8965 4.12109 21.8809 6.01953 21.8809ZM13.9912 19.1211C11.3633 19.1211 9.25391 17.0117 9.25391 14.375C9.25391 11.7295 11.3633 9.62012 13.9912 9.62012C16.6279 9.62012 18.7373 11.7295 18.7373 14.375C18.7373 17.0117 16.6279 19.1211 13.9912 19.1211ZM19.2998 11.1406C19.2998 10.5166 19.8359 9.97168 20.4775 9.97168C21.1104 9.97168 21.6465 10.5166 21.6465 11.1406C21.6465 11.791 21.1104 12.3008 20.4775 12.3096C19.8359 12.3096 19.2998 11.7998 19.2998 11.1406ZM13.9912 17.5303C15.7402 17.5303 17.1465 16.124 17.1465 14.375C17.1465 12.6172 15.7402 11.2109 13.9912 11.2109C12.251 11.2109 10.8447 12.6172 10.8447 14.375C10.8447 16.124 12.2598 17.5303 13.9912 17.5303Z'
      }
      fill='currentColor'
    />
  </Icon>
)
