import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
} from 'remix'
import type { MetaFunction } from 'remix'
import tailwind from './tailwind.css'
import { Layout } from './components/layout'

export function links() {
  return [{ rel: 'stylesheet', href: tailwind }]
}

export const meta: MetaFunction = () => {
  return { title: 'NYT | Remix Demo | Home' }
}

function Document({
  children,
  title = `NYT | A Remix Demo using the NYT API`,
}: {
  children: React.ReactNode
  title?: string
}) {
  const transition = useTransition()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body
        className={`bg-gray-200 text-black fixed h-screen w-screen ${
          transition.state === 'loading' ? 'opacity-10' : 'opacity-100'
        }`}
      >
        <Layout>{children}</Layout>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}
