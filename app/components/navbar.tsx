import { Form, NavLink } from 'remix'
import {
  OutlineFavoriteIcon,
  OutlineHomeIcon,
  SearchIcon,
  UserIcon,
} from './icons'

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
        `${
          isActive ? 'font-black' : 'focus:text-slate-500'
        } text-slate-700 hover:text-slate-500`
      }
    />
  )
}

export default function Navbar() {
  return (
    <nav className="flex justify-around py-3 bg-gray-100 text-slate-900 md:flex-col md:py-4 md:px-4 md:justify-start md:gap-6">
      {/* <Form method="post" action="/auth/logout">
        <button type="submit">
        <UserIcon></UserIcon>
        </button>
      </Form> */}
      <a
        href="https://developer.nytimes.com/"
        rel="noopener noreferrer"
        target={'_blank'}
        aria-label="Data provided by The New York Times"
      >
        <img
          src="/logos/poweredby_nytimes_30a.png"
          alt="Data provided by The New York Times"
        ></img>
      </a>
      <div className="hidden md:block md:flex-1" />
      <PrimaryNavLink to="/">
        <OutlineHomeIcon></OutlineHomeIcon>
      </PrimaryNavLink>
      <PrimaryNavLink to="/search">
        <SearchIcon></SearchIcon>
      </PrimaryNavLink>
      <PrimaryNavLink to="/bookmarks">
        <OutlineFavoriteIcon></OutlineFavoriteIcon>
      </PrimaryNavLink>
      <PrimaryNavLink to="/account">
        <UserIcon></UserIcon>
      </PrimaryNavLink>
    </nav>
  )
}
