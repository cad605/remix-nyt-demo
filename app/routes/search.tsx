import { json, useActionData, useLoaderData } from 'remix'
import type { LoaderFunction, ActionFunction } from 'remix'
import invariant from 'tiny-invariant'
import { getSearchResults, SearchArticle } from '~/utils/search.server'

interface LoaderData {
  results: Array<SearchArticle>
}

interface ActionData {
  results: Array<SearchArticle>
}

// export const loader: LoaderFunction = async ({
//   request,
//   context,
//   params
// }): Promise<Response> => {
// }

export const action: ActionFunction = async ({
  request,
  context,
  params,
}): Promise<Response> => {
  const formData = await request.formData()
  const query = formData.get('q')?.toString()

  if (!query) {
    return new Response()
  }

  const res = await getSearchResults(query)
  const results = res.response.docs

  return json<ActionData>({ results })
}

export default function SearchIndex() {
  const searchResults = useActionData<ActionData>()

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold capitalize">Search</h1>
    </div>
  )
}
