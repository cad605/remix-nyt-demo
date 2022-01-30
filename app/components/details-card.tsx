import { TopStory } from '~/models/top-story'
import formatDate from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { OutlineHeartIcon } from './icons'

export default function Details({ article }: { article: TopStory }) {
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
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row justify-start space-x-2 pt-2">
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
          <OutlineHeartIcon></OutlineHeartIcon>
        </button>
      </div>
    </div>
  )
}
