import Footer from './footer'
import Navbar from './navbar'

function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col md:flex-row" children={children} />
  )
}

function SidebarNav({ children }: { children: React.ReactNode }) {
  return (
    <header
      className="m-4 flex flex-col overflow-hidden md:flex-row border-2 rounded-xl"
      children={children}
    />
  )
}

function VScrollContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex-1 flex flex-col ml-6 mr-6 overflow-y-scroll overflow-x-hidden md:overflow-hidden"
      style={{ scrollSnapType: 'y mandatory' }}
      children={children}
    />
  )
}

export function VScrollChild({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={
        'flex flex-col h-full flex-shrink-0 w-full order-1 lg:w-1/2 border-l last:border-r' +
        ' ' +
        className
      }
      style={{
        scrollSnapAlign: 'start',
      }}
      children={children}
    />
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout>
      <SidebarNav>
        <Navbar></Navbar>
      </SidebarNav>
      <VScrollContent>
        <main className="grow">{children}</main>
        <Footer></Footer>
      </VScrollContent>
    </SidebarLayout>
  )
}
