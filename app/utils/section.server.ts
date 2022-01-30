import { TopStory } from '~/models/top-story'

const baseURL = 'https://api.nytimes.com/svc'

const TIMES_KEY = process.env.TIMES_KEY
if (!TIMES_KEY) {
  throw new Error('Remeber to set your NYT API key...')
}

export async function getTopFeatureBySection(section: string): Promise<any> {
  const res = await fetch(
    `${baseURL}/topstories/v2/${section}.json?api-key=${TIMES_KEY}`,
  )
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }
  const stories = await res.json()
  return stories.results[0] ?? null
}

export async function getTopStoriesBySection(section: string): Promise<any> {
  const res = await fetch(
    `${baseURL}/topstories/v2/${section}.json?api-key=${TIMES_KEY}`,
  )
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }
  const stories = await res.json()
  return stories.results ?? null
}
