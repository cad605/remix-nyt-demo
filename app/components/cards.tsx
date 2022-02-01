import { OutlineFavoriteIcon } from './icons'
import formatDate from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { Article } from '~/models/article'

function DetailsCard({ data }: { data: Article }) {
  const { title, url, kicker, published_date, subsection } = data
  return (
    <div className="pt-4 flex flex-col space-y-4">
      <MetadataRow
        subsection={subsection}
        kicker={kicker}
        publishedDate={published_date}
      ></MetadataRow>
      <h1 className="text-black text-md lg:text-lg font-bold">{title}</h1>
      <ActionRow url={url}></ActionRow>
    </div>
  )
}

function FeatureCard({ data }: { data: Article }) {
  const {
    title,
    abstract,
    url,
    multimedia,
    kicker,
    published_date,
    subsection,
  } = data

  return (
    <article className="flex flex-col space-y-4">
      {multimedia ? (
        <div className="space-y-2">
          <img
            className="aspect-h-4 aspect-w-3"
            src={multimedia[0].url}
            alt={multimedia[0].caption}
          ></img>
          <p className='className="mt-2 flex justify-end text-gray-700 text-xs font-thin"'>
            {multimedia[0].copyright}
          </p>
        </div>
      ) : null}
      <MetadataRow
        subsection={subsection}
        kicker={kicker}
        publishedDate={published_date}
      ></MetadataRow>
      <ArticleInfo title={title} abstract={abstract}></ArticleInfo>
      <ActionRow url={url}></ActionRow>
    </article>
  )
}

function MetadataRow({
  subsection,
  kicker,
  publishedDate,
}: {
  subsection?: string
  kicker?: string
  publishedDate: string
}) {
  return (
    <div className="items-center flex flex-row space-x-2 text-xs font-medium">
      {subsection ? (
        <div className="p-2 bg-black text-white text-center capitalize">
          {subsection}
        </div>
      ) : null}
      {kicker ? (
        <div className="p-2 bg-gray-500 text-white text-center capitalize">
          {kicker}
        </div>
      ) : null}
      <p>{formatDate(parseISO(publishedDate), 'PPP')}</p>
    </div>
  )
}

function ArticleInfo({
  title,
  abstract,
}: {
  title: string
  abstract?: string
}) {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-black text-2xl lg:text-4xl font-bold">{title}</h1>
      <p className="text-gray-700 text:lg lg:text-2xl font-normal">
        {abstract}
      </p>
    </div>
  )
}

function ActionRow({ url }: { url: string }) {
  return (
    <div className="flex flex-row justify-between text-gray-500">
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
  )
}

export { FeatureCard, DetailsCard }
