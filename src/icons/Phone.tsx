import classNames from 'classnames'

import type { IconProps, PhoneProps } from '../IconProps'

export const Phone: React.FC<IconProps<PhoneProps>> = ({
  color,
  size,
  isPutDown,
  ...rest
}) => (
  <svg
    width='16'
    height='17'
    viewBox='0 0 16 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={classNames('fill-current text-black dark:text-white', {
      '-rotate-[135deg]': isPutDown
    })}
    {...rest}>
    <path
      d='M4.52148 11.7671C6.92041 14.166 9.83398 16.0171 12.2163 16.0171C13.2871 16.0171 14.2251 15.6436 14.9805 14.8135C15.4204 14.3237 15.6943 13.751 15.6943 13.1865C15.6943 12.7715 15.5366 12.373 15.1465 12.0908L12.5981 10.2812C12.208 10.0156 11.8843 9.88281 11.5854 9.88281C11.2119 9.88281 10.8716 10.0986 10.4897 10.4722L9.90039 11.0532C9.80908 11.1445 9.69287 11.186 9.58496 11.186C9.46045 11.186 9.33594 11.1362 9.25293 11.0947C8.73828 10.8208 7.8584 10.0654 7.03662 9.25195C6.22314 8.43848 5.46777 7.55859 5.20215 7.04395C5.16064 6.95264 5.11084 6.83643 5.11084 6.71191C5.11084 6.604 5.14404 6.49609 5.23535 6.40479L5.82471 5.79883C6.18994 5.41699 6.41406 5.08496 6.41406 4.70312C6.41406 4.4043 6.27295 4.08057 5.99902 3.69043L4.21436 1.17529C3.92383 0.776855 3.51709 0.602539 3.06885 0.602539C2.521 0.602539 1.95654 0.851562 1.4668 1.32471C0.661621 2.09668 0.304688 3.05127 0.304688 4.10547C0.304688 6.48779 2.12256 9.37646 4.52148 11.7671Z'
      fill='currentColor'
    />
  </svg>
)