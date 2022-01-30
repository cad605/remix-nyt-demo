import { TopStory } from '~/models/top-story'
import formatDate from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { OutlineFavoriteIcon } from './icons'

export default function Details({
  article,
  className = '',
}: {
  article: TopStory
  className?: string
}) {
  const {
    title,
    abstract,
    url,
    multimedia,
    kicker,
    byline,
    published_date,
    subsection,
  } = article
  return (
    <div className={`flex flex-row space-x-4 pt-2 ${className}`}>
      {multimedia ? (
        <div className="flex-none hidden md:block w-1/4">
          <img
            className="rounded-md object-cover h-full w-full"
            src={multimedia[0].url}
            alt={multimedia[0].caption}
          ></img>
          {/* <div className="flex justify-end text-gray-700 text-xs font-thin">
            <p>{multimedia[0].copyright}</p>
          </div> */}
        </div>
      ) : null}
      <div className="grow flex flex-col space-y-2">
        <div className="flex flex-row justify-start space-x-2">
          {subsection ? (
            <div className="p-2 bg-black text-white text-xs text-center uppercase rounded-md">
              {subsection}
            </div>
          ) : null}
          {kicker ? (
            <div className="p-2 bg-gray-500 text-white text-xs text-center uppercase rounded-md">
              {kicker}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-black text-lg font-bold">{title}</h1>
          <div className="flex flex-row justify-between text-base font-normal">
            <p>{byline}</p>
            <p>{formatDate(parseISO(published_date), 'PPP')}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between text-gray-500 ">
          <a
            href={url}
            rel="noopener noreferrer"
            target={'_blank'}
            aria-label="Continue reading on The New York Times"
          >
            <button className="underline hover:-translate-y-1">
              Read on NYT.com
            </button>
          </a>
          <button>
            <OutlineFavoriteIcon></OutlineFavoriteIcon>
          </button>
        </div>
      </div>
    </div>
  )
}
