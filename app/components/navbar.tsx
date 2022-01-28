import { Form, NavLink } from 'remix'
import { OutlineFavoriteIcon, SearchIcon, UserIcon } from './icons'

type PrimaryNavLinkProps = {
  to: string
  children?: React.ReactNode
}

function PrimaryNavLink({ to, children }: PrimaryNavLinkProps) {
  return (
    <NavLink
      to={to}
      children={children}
      className={({ isActive }) =>
        isActive ? 'text-white' : 'focus:text-gray-100'
      }
    />
  )
}

export default function Navbar() {
  return (
    <nav className="flex justify-around py-3 bg-gray-100 text-slate-900 md:flex-col md:py-4 md:px-4 md:justify-start md:gap-6">
      <PrimaryNavLink to="/search">
        <SearchIcon></SearchIcon>
      </PrimaryNavLink>
      <PrimaryNavLink to="/bookmarks">
        <OutlineFavoriteIcon></OutlineFavoriteIcon>
      </PrimaryNavLink>
      <div className="hidden md:block md:flex-1" />
      <Form method="post" action="/auth/logout">
        <button type="submit">
          <UserIcon></UserIcon>
        </button>
      </Form>
    </nav>
  )
}
