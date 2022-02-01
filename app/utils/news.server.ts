import { Article } from '~/models/article'

const baseURL = 'https://api.nytimes.com/svc'

const TIMES_KEY = process.env.TIMES_KEY
if (!TIMES_KEY) {
  throw new Error('Remeber to set your NYT API key...')
}

export interface SectionArticles {
  feature?: Article
  top?: Array<Article>
  latest?: Array<Article>
}

export async function getTopArticlesBySection(
  section: string,
): Promise<Response> {
  const res = await fetch(
    `${baseURL}/topstories/v2/${section}.json?api-key=${TIMES_KEY}`,
  )

  return res
}

export async function getNewsWireBySection(
  section: string,
  limit: number = 3,
): Promise<Response> {
  const res = await fetch(
    `${baseURL}/news/v3/content/all/${
      section === 'home' ? 'home page' : section
    }.json?limit=${limit}&api-key=${TIMES_KEY}`,
  )

  return res
}
