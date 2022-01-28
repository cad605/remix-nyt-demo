import { LogoIcon } from './icons'

export default function Logo() {
  return (
    <div className="mt-4 mb-2  border-b-2 border-dotted border-zinc-600 pb-2">
      <a
        href="https://www.nytimes.com"
        rel="noopener noreferrer"
        target={'_blank'}
        aria-label="The New York Times"
      >
        <LogoIcon></LogoIcon>
      </a>
    </div>
  )
}
