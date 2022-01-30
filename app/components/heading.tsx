import { LogoIcon } from './icons'
import formatDate from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export default function Heading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center mt-4 mb-2 border-b-2 border-dotted border-gray-600 pb-2">
      <div className="hidden md:flex justify-start">
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
      <div className="hidden md:flex justify-end">
        <a
          href="https://developer.nytimes.com/"
          rel="noopener noreferrer"
          target={'_blank'}
          aria-label="Data provided by The New York Times"
        >
          <img
            src="/logos/poweredby_nytimes_200c.png"
            alt="Data provided by The New York Times"
          ></img>
        </a>
      </div>
    </div>
  )
}
