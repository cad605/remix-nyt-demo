import { Link } from 'remix'

export default function AccountIndex({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="space-y-4">
      <h1 className="text-xl font-bold capitalize">Account</h1>
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:divide-x-2 lg:divide-dotted lg:divide-gray-500">
        {children}
      </div>
    </main>
  )
}
