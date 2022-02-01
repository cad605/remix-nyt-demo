import invariant from 'tiny-invariant'
import { useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import {
  getNewsWireBySection,
  getTopArticlesBySection,
  SectionArticles,
} from '~/utils/news.server'
import { FeatureCard } from '~/components/cards'
import { ArticleList } from '~/components/article-list'

type LoaderData = {
  section: string
  data: SectionArticles | null
}
export const loader: LoaderFunction = async ({ params }): Promise<any> => {
  invariant(params.section, 'Expected params.section')

  const res = await Promise.all([
    getTopArticlesBySection(params.section),
    getNewsWireBySection(params.section),
  ])

  const topStories = res[0].ok ? await res[0].json() : null
  const newsWire = res[1].ok ? await res[1].json() : null

  const data: SectionArticles = {
    feature: topStories ? topStories.results[0] : null,
    top: topStories ? topStories.results.slice(1, 5) : null,
    latest: newsWire ? newsWire.results : null,
  }

  return {
    section: params.section,
    data,
  }
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
      {data && data.feature ? (
        <FeatureCard data={data.feature}></FeatureCard>
      ) : null}
      {data && data.latest ? (
        <ArticleList title={'Latest'} data={data?.latest}></ArticleList>
      ) : null}
      {data && data.top ? (
        <ArticleList title={'Most Popular'} data={data?.top}></ArticleList>
      ) : null}
    </SectionLayout>
  )
}
