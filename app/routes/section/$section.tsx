import invariant from 'tiny-invariant'
import { json, useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import {
  getLatestBySection,
  getTopStoriesBySection,
  SectionArticles,
} from '~/utils/news.server'
import { FeatureCard, LatestCard, TopStoriesCard } from '~/components/cards'
import { ArticleList } from '~/components/article-list'

type LoaderData = {
  section: string
  data: SectionArticles
}
export const loader: LoaderFunction = async ({ params }): Promise<any> => {
  invariant(params.section, 'Expected params.section')
  const [topStories, latestStories] = await Promise.all([
    getTopStoriesBySection(params.section),
    getLatestBySection(params.section),
  ])

  invariant(Array.isArray(topStories), 'Expected topStories to be an array')
  invariant(
    Array.isArray(latestStories),
    'Expected latestStories to be an array',
  )
  const data: SectionArticles = {
    feature: Array.isArray(topStories) ? topStories.results[0] : null,
    topStories: topStories.results.slice(1, 5),
    latest: latestStories.results,
  }

  const responseInit: ResponseInit = {
    headers: {},
  }
  return json(
    {
      section: params.section,
      data,
    },
    responseInit,
  )
}

function SectionLayout({
  section,
  children,
}: {
  section: string
  children: React.ReactNode | React.ReactNode[]
}) {
  return (
    <main className="space-y-4">
      <h1 className="text-xl font-bold capitalize">{section}</h1>
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:divide-x-2 lg:divide-dotted lg:divide-gray-500">
        {children}
      </div>
    </main>
  )
}

export default function Section() {
  const { section, data } = useLoaderData<LoaderData>()
  return (
    <SectionLayout section={section}>
      {data.feature ? <FeatureCard data={data.feature}></FeatureCard> : null}
      {data.topStories ? (
        <ArticleList title={'Top Stories'}>
          {data?.topStories.map(article => {
            return (
              <TopStoriesCard key={article.uri} data={article}></TopStoriesCard>
            )
          })}
        </ArticleList>
      ) : null}
      {data.latest ? (
        <ArticleList title={'Latest'}>
          {data?.latest.map(article => {
            return <LatestCard key={article.uri} data={article}></LatestCard>
          })}
        </ArticleList>
      ) : null}
    </SectionLayout>
  )
}
