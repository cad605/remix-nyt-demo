import { TopStory } from '~/models/top-story'
import { OutlineHeartIcon } from './icons'
import formatDate from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

function FeatureCard({ article }: { article: TopStory }) {
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
      {multimedia ? (
        <div className="w-2/3">
          <img
            className="rounded-md"
            src={multimedia[0].url}
            alt={multimedia[0].caption}
          ></img>
          <div className="flex justify-end text-gray-700 text-xs font-thin">
            <p>{multimedia[0].copyright}</p>
          </div>
        </div>
      ) : null}
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
      <div className="flex flex-col space-y-8">
        <div className="space-y-4">
          <h1 className="text-black text-2xl md:text-4xl font-bold">{title}</h1>
          <p className="text-gray-700 text:md md:text-2xl font-normal">
            {abstract}
          </p>
        </div>
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

export { FeatureCard }
