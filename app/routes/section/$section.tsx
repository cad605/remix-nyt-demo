import invariant from 'tiny-invariant'
import { useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import {
  getTopFeatureBySection,
  getTopStoriesBySection,
} from '~/utils/section.server'
import { TopStory } from '~/models/top-story'
import { FeatureCard } from '~/components/feature-card'
import DetailsCard from '~/components/details-card'

type LoaderData = {
  section: string
  feature: TopStory
  topStories: Array<TopStory>
}
export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.section, 'Expected params.section')
  const feature = await getTopFeatureBySection(params.section)
  const topStories = await getTopStoriesBySection(params.section)
  return {
    feature,
    topStories,
    section: params.section,
  }
}

export default function SectionId() {
  const { feature, section, topStories } = useLoaderData<LoaderData>()
  return (
    <div className="m-4">
      <h1 className="mb-4 text-xl font-bold capitalize">{section}</h1>
      <main className="flex flex-col sm:flex-row divide-x-2 divide-dotted divide-gray-500">
        <div className="flex-1">
          <h1 className="text-black font-bold text-lg ml-6">Featured</h1>
          {feature ? (
            <FeatureCard article={feature} key={feature.uri}></FeatureCard>
          ) : null}
        </div>
        <div className="flex-1">
          <h1 className="text-black font-bold text-lg ml-6">Latest News</h1>
          <div className="space-y-4 divide-y-2 divide-dotted divide-gray-500">
            {topStories
              ? topStories.slice(1, 6).map(article => {
                  return (
                    <DetailsCard
                      key={article.uri}
                      article={article}
                    ></DetailsCard>
                  )
                })
              : null}
          </div>
        </div>
      </main>
    </div>
  )
}
