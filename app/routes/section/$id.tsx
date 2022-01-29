import { LoaderFunction, useLoaderData } from 'remix'

type LoaderData = string
export const loader: LoaderFunction = ({ params }) => {
  return params.id
}

export default function SectionId() {
  const section = useLoaderData<LoaderData>()
  return (
    <div>
      <h1 className="text-xl font-bold capitalize">{section}</h1>
      <main className="flex flex-col">
        <article></article>
        <article></article>
      </main>
    </div>
  )
}
