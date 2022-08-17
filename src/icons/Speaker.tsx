import { SpeakerProps } from '../IconProps'

export const Speaker: React.FC<SpeakerProps> = ({ pitch, ...rest }) => (
  <svg
    width='33'
    height='24'
    viewBox='0 0 33 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='fill-current text-black dark:text-white'
    {...rest}>
    {pitch === 'idle' && (
      <path
        d='M2.92969 14.9136C2.54297 14.9136 2.35547 14.7261 2.35547 14.3393V9.71043C2.35547 9.31199 2.54297 9.12449 2.92969 9.12449H6.58594C6.90234 9.12449 7.13672 9.0659 7.40625 8.8198L12.0703 4.5659C12.1289 4.51902 12.1875 4.48386 12.2578 4.48386C12.3516 4.48386 12.4219 4.54246 12.4219 4.64793V19.355C12.4219 19.4721 12.3516 19.5307 12.2695 19.5307C12.1992 19.5307 12.1406 19.5073 12.0703 19.4487L7.40625 15.2182C7.13672 14.9721 6.90234 14.9136 6.58594 14.9136H2.92969Z'
        fill='currentColor'
        fillOpacity={0.6}
      />
    )}
    {pitch === 'low' && (
      <path
        d='M18.6562 17.2221C19.1602 17.5503 19.8164 17.4331 20.1797 16.9175C21.1289 15.6518 21.6914 13.8589 21.6914 11.9956C21.6914 10.1323 21.1289 8.35105 20.1797 7.07371C19.8164 6.55808 19.1602 6.4409 18.6562 6.78074C18.082 7.15574 17.9648 7.84715 18.4336 8.52683C19.0781 9.45261 19.4414 10.6948 19.4414 11.9956C19.4414 13.2964 19.0664 14.5268 18.4336 15.4643C17.9766 16.144 18.082 16.8354 18.6562 17.2221Z'
        fill='currentColor'
        fillOpacity={0.6}
      />
    )}
    {pitch === 'normal' && (
      <path
        d='M23.3672 20.3628C23.9062 20.6909 24.5625 20.5737 24.9258 20.0229C26.4609 17.8667 27.3398 14.9721 27.3398 11.9956C27.3398 9.01902 26.4727 6.11277 24.9258 3.96824C24.5625 3.41746 23.9062 3.28855 23.3672 3.6284C22.8047 3.97996 22.7227 4.68308 23.1328 5.30418C24.3867 7.1323 25.1016 9.51121 25.1016 11.9956C25.1016 14.4682 24.3633 16.8471 23.1328 18.687C22.7344 19.3081 22.8047 19.9995 23.3672 20.3628Z'
        fill='currentColor'
        fillOpacity={0.6}
      />
    )}
    {pitch === 'high' && (
      <path
        d='M28.1133 23.5386C28.6289 23.8784 29.3203 23.7261 29.6953 23.1636C31.7578 20.0698 33 16.2261 33 12.0073C33 7.77683 31.7344 3.9448 29.6953 0.839333C29.3203 0.265115 28.6289 0.12449 28.1133 0.464333C27.5508 0.827615 27.4688 1.51902 27.8555 2.14011C29.6484 4.87058 30.7617 8.2573 30.7617 12.0073C30.7617 15.7339 29.6484 19.144 27.8555 21.8628C27.4688 22.4839 27.5508 23.1753 28.1133 23.5386Z'
        fill='currentColor'
        fillOpacity={0.6}
      />
    )}
  </svg>
)
