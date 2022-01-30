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
          isActive ? 'text-white bg-black' : null
        } p-2 rounded-xl text-center hover:-translate-y-1`
      }
    />
  )
}

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-around py-3 bg-gray-100 md:flex-col md:py-4 md:px-4 md:justify-start md:gap-6 rounded-xl">
      <PrimaryNavLink to="/search">
        <SearchIcon></SearchIcon>
      </PrimaryNavLink>
      <div className="hidden md:block md:flex-1" />
      <PrimaryNavLink to="/section/home">
        <OutlineHomeIcon></OutlineHomeIcon>
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
