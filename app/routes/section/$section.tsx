import invariant from 'tiny-invariant'
import { useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import {
  getNewsWireBySection,
  getTopArticlesBySection,
  SectionArticles,
} from '~/utils/news.server'
import { FeatureCard } from '~/components/cards'
import { LatestList } from '~/components/latest-list'

type LoaderData = {
  section: string
  data: SectionArticles | null
}
export const loader: LoaderFunction = async ({ params }): Promise<any> => {
  invariant(params.section, 'Expected params.section')

  const responses = await Promise.all([
    getTopArticlesBySection(params.section),
    getNewsWireBySection(params.section),
  ])

  const topStories = await responses[0].json()
  const newsWire = await responses[1].json()

  const data: SectionArticles = {
    feature: topStories.results[0],
    top: topStories.results.slice(1, 5),
    latest: newsWire.results,
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
        <LatestList data={data?.latest}></LatestList>
      ) : null}
    </SectionLayout>
  )
}
