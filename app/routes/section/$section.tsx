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
import ArrowButton from '~/components/arrow-button'

type LoaderData = {
  section: string
  feature: TopStory
  topStories: Array<TopStory>
}
export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.section, 'Expected params.section')
  const feature = await getTopFeatureBySection(params.section).catch(e => {
    console.log(
      'There has been a problem with your fetch operation: ' + e.message,
    )
  })
  const topStories = await getTopStoriesBySection(params.section).catch(e => {
    console.log(
      'There has been a problem with your fetch operation: ' + e.message,
    )
  })
  return {
    feature,
    topStories,
    section: params.section,
  }
}

export default function SectionId() {
  const { feature, section, topStories } = useLoaderData<LoaderData>()
  return (
    <main className="h-full">
      <h1 className="text-xl font-bold capitalize">{section}</h1>
      <div className="h-full flex flex-col md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 space-y-2 divide-dotted divide-gray-500">
        <div className="h-5/6 flex-1 p-4 md:overflow-y-scroll">
          {feature ? (
            <FeatureCard article={feature} key={feature.uri}></FeatureCard>
          ) : null}
        </div>
        <div className="h-5/6 flex-1 p-4 md:overflow-y-scroll space-y-4 divide-y-2 divide-dotted divide-gray-500">
          <ArrowButton
            direction="right"
            className="text-xl font-bold capitalize"
          >
            Latest News
          </ArrowButton>
          {topStories
            ? topStories.map(article => {
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
  )
}
