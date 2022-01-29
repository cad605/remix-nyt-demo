import { LoaderFunction, useLoaderData } from 'remix'

type LoaderData = string
export const loader: LoaderFunction = ({ params }) => {
  return params.section
}

export default function SectionId() {
  const section = useLoaderData<LoaderData>()
  return (
    <div>
      <h1 className="mb-4 text-xl font-bold capitalize">{section}</h1>
      <main className="flex flex-col">
        <article></article>
        <article></article>
      </main>
    </div>
  )
}
