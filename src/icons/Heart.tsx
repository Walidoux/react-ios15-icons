import type { IconProps } from '../IconProps'

export const Heart: React.FC<IconProps> = ({ color, size, ...rest }) => (
  <svg
    width='82'
    height='71'
    viewBox='0 0 82 71'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='fill-current text-black dark:text-white'
    {...rest}>
    <path
      d='M40.9989 71C-38.0133 27.028 17.2963 -20.7065 40.9989 9.47786C64.7046 -20.7065 120.014 27.028 40.9989 71Z'
      fill='currentColor'
    />
  </svg>
)
