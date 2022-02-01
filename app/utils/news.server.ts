import { Article, NYTResponse } from '~/models/article'

const baseURL = 'https://api.nytimes.com/svc'

const TIMES_KEY = process.env.TIMES_KEY
if (!TIMES_KEY) {
  throw new Error('Remeber to set your NYT API key...')
}

export interface SectionArticles {
  feature?: Article
  topStories?: Array<Article>
  latest?: Array<Article>
}

export async function getTopStoriesBySection(
  section: string,
): Promise<NYTResponse> {
  const res = await fetch(
    `${baseURL}/topstories/v2/${section}.json?api-key=${TIMES_KEY}`,
  )

  if (res.ok) {
    const results = await res.json()
    return results
  } else {
    throw new Response(res.statusText, { status: res.status })
  }
}

export async function getLatestBySection(
  section: string,
  limit: number = 3,
): Promise<NYTResponse | null> {
  const res = await fetch(
    `${baseURL}/news/v3/content/all/${
      section === 'home' ? 'all' : section
    }.json?limit=${limit}&api-key=${TIMES_KEY}`,
  )

  if (res.ok) {
    const results = await res.json()
    return results
  } else {
    // some sections don't have this feature; if bad request, return null, otherwise throw response
    switch (res.status) {
      case 400:
        return null
    }

    throw new Response(res.statusText, { status: res.status })
  }
}

export async function getLatestSectionList(): Promise<any> {
  const res = await fetch(`${baseURL}/news/v3/content/section-list.json`)
  if (res.ok) {
    const results = await res.json()
    return results
  } else {
    throw new Response(res.statusText, { status: res.status })
  }
}
