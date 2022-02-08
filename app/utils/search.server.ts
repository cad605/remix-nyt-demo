import { Article } from '~/models/article'

const TIMES_API = process.env.TIMES_API
if (!TIMES_API) {
  throw new Error('Remeber to set your NYT API base url...')
}

const TIMES_KEY = process.env.TIMES_KEY
if (!TIMES_KEY) {
  throw new Error('Remeber to set your NYT API key...')
}

interface Keyword {
  name: string
  subject: string
  value: string
  rank: number
  major: string
}

export interface SearchResult {
  status: string
  copyright: string
  response: {
    docs: Array<SearchArticle>
  }
}

export interface SearchArticle extends Article {
  web_url: string
  snippet: string
  lead_paragraph: string
  section_name: string
  pub_date: string
  keywords: Array<Keyword>
  news_desk: string
  document_type: string
}

export async function getSearchResults(query: string): Promise<SearchResult> {
  const res = await fetch(`${TIMES_API}/articlesearch.json?q=${query}`)
  if (res.ok) {
    const results = await res.json()
    return results
  } else {
    throw new Response(res.statusText, { status: res.status })
  }
}
