import Footer from './footer'
import Navbar from './navbar'
import HeaderSection from './sections/header-section'

function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col md:flex-row" children={children} />
  )
}

function SidebarNav({ children }: { children: React.ReactNode }) {
  return (
    <header
      className="m-4 flex flex-col overflow-hidden md:flex-row rounded-xl"
      children={children}
    />
  )
}

function VScrollContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex-1 flex flex-col ml-6 mr-6 overflow-y-scroll overflow-x-hidden md:overflow-hidden"
      // style={{ scrollSnapType: 'y mandatory' }}
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
      className={'mt-4 grow flex flex-col' + ' ' + className}
      // style={{
      //   scrollSnapAlign: 'start',
      // }}
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
        <HeaderSection></HeaderSection>
        <VScrollChild>{children}</VScrollChild>
        <Footer></Footer>
      </VScrollContent>
    </SidebarLayout>
  )
}
