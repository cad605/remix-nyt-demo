import type { LoaderFunction } from 'remix'

type LoaderData = {}

export const loader: LoaderFunction = (): Array<LoaderData> => {
  return []
}

export default function Index() {
  return <div></div>
}
