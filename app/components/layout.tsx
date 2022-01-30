import Navbar from './navbar'
import Submenu from './submenu'

function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="h-full w-full flex flex-col md:flex-row"
      children={children}
    />
  )
}

function SidebarNav({ children }: { children: React.ReactNode }) {
  return (
    <header
      className="m-4 flex flex-col overflow-hidden md:flex-row"
      children={children}
    />
  )
}

function VScrollContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="h-full mt-4 mr-4 ml-4 flex-1 flex flex-col overflow-y-scroll md:overflow-y-hidden overflow-x-hidden"
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
      className={`m-4 h-full flex flex-col flex-shrink-0 order-1 ${className}`}
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
        <Submenu></Submenu>
        <VScrollChild>{children}</VScrollChild>
      </VScrollContent>
    </SidebarLayout>
  )
}
