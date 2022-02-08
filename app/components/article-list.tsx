import ArrowButton from './arrow-button'

export function ArticleList({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <section className="lg:pl-6 lg:pr-6 flex-1 space-y-4 divide-y-2 divide-dotted divide-gray-500">
      <ArrowButton direction="right" className="text-xl font-bold capitalize">
        {title}
      </ArrowButton>
      <div className="space-y-4 divide-y-2 divide-dotted divide-gray-500">
        {children}
      </div>
    </section>
  )
}
