import type { IconProps } from '../IconProps'

export const Camera: React.FC<IconProps> = ({ color, size, ...rest }) => (
  <svg
    width='27'
    height='21'
    viewBox='0 0 27 21'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='fill-current text-black dark:text-white'
    {...rest}>
    <path
      d='M4.12598 20.0508H22.8701C25.0029 20.0508 26.0898 18.9844 26.0898 16.8721V6.13623C26.0898 4.02393 25.0029 2.96777 22.8701 2.96777H19.9375C19.1274 2.96777 18.8813 2.80371 18.4199 2.29102L17.5996 1.36816C17.0869 0.804199 16.564 0.496582 15.5078 0.496582H11.4165C10.3604 0.496582 9.8374 0.804199 9.32471 1.36816L8.50439 2.29102C8.04297 2.79346 7.78662 2.96777 6.98682 2.96777H4.12598C1.98291 2.96777 0.90625 4.02393 0.90625 6.13623V16.8721C0.90625 18.9844 1.98291 20.0508 4.12598 20.0508ZM13.498 17.0259C10.3911 17.0259 7.89941 14.5444 7.89941 11.417C7.89941 8.2998 10.3911 5.81836 13.498 5.81836C16.605 5.81836 19.0864 8.2998 19.0864 11.417C19.0864 14.5444 16.5947 17.0259 13.498 17.0259ZM19.7734 7.64355C19.7734 6.94629 20.3887 6.33105 21.1064 6.33105C21.814 6.33105 22.4189 6.94629 22.4189 7.64355C22.4189 8.37158 21.814 8.95605 21.1064 8.96631C20.3887 8.96631 19.7734 8.38184 19.7734 7.64355ZM13.498 15.4673C15.7334 15.4673 17.5381 13.6729 17.5381 11.417C17.5381 9.17139 15.7334 7.3667 13.498 7.3667C11.2627 7.3667 9.44775 9.17139 9.44775 11.417C9.44775 13.6729 11.2729 15.4673 13.498 15.4673Z'
      fill='currentColor'
    />
  </svg>
)