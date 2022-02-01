import { Article } from '~/models/article'
import ArrowButton from './arrow-button'
import { DetailsCard } from './cards'

export function ArticleList({
  data,
  title,
}: {
  data: Array<Article> | undefined
  title: string
}) {
  return (
    <aside className="lg:pl-6 lg:pr-6 flex-1 space-y-4 divide-y-2 divide-dotted divide-gray-500">
      <ArrowButton direction="right" className="text-xl font-bold capitalize">
        {title}
      </ArrowButton>
      <div className="space-y-4 divide-y-2 divide-dotted divide-gray-500">
        {data
          ? data.map(article => {
              return (
                <DetailsCard key={article.uri} data={article}></DetailsCard>
              )
            })
          : null}
      </div>
    </aside>
  )
}
