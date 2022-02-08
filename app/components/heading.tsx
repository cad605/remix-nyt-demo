import { LogoIcon } from './icons'
import formatDate from 'date-fns/format'

export default function Heading() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center border-b-2 border-dotted border-gray-600 pb-4">
      <div className="hidden lg:flex justify-start">
        <p className="text-sm font-semibold">
          {formatDate(new Date(), 'PPPP')}
        </p>
      </div>
      <a
        href="https://www.nytimes.com"
        rel="noopener noreferrer"
        target={'_blank'}
        aria-label="The New York Times"
        className="grow"
      >
        <LogoIcon></LogoIcon>
      </a>
      <div className="hidden lg:flex justify-end">
        <a
          href="https://developer.nytimes.com/"
          rel="noopener noreferrer"
          target={'_blank'}
          aria-label="Data provided by The New York Times"
        >
          <img
            className="aspect-square"
            src="/logos/poweredby_nytimes_65a.png"
            alt="Data provided by The New York Times"
          ></img>
        </a>
      </div>
    </div>
  )
}
