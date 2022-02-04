import Navbar from './navbar'
import Submenu from './submenu'

function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col lg:flex-row" children={children} />
  )
}

function SidebarNav({ children }: { children: React.ReactNode }) {
  return (
    <header
      className="flex flex-col lg:order-first lg:flex-row"
      children={children}
    />
  )
}

function VScrollContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="h-full lg:m-4 flex-1 flex flex-col overflow-y-scroll"
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
      className={`m-6 flex flex-col flex-shrink-0 order-1 ${className}`}
      children={children}
    />
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout>
      <VScrollContent>
        <Submenu></Submenu>
        <VScrollChild>{children}</VScrollChild>
      </VScrollContent>
      <SidebarNav>
        <Navbar></Navbar>
      </SidebarNav>
    </SidebarLayout>
  )
}
