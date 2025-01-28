import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#a)'} fill={'currentColor'}>
      <path
        d={
          'M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3ZM4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4V8Zm16 8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h16v5Z'
        }
      />
      <path d={'M7 15h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM15 15h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2Z'} />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h24v24H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)

export const CreditCard = memo(forwardRef(SvgComponent))
