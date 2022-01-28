import { Form, NavLink } from 'remix'
import { UserIcon } from './icons'

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
    <header>
      <nav className="flex justify-around py-3 bg-gray-900 text-gray-500 lg:flex-col lg:py-4 lg:px-4 lg:justify-start lg:gap-6">
        <PrimaryNavLink to="/login">
          <UserIcon></UserIcon>
        </PrimaryNavLink>
        <div className="hidden lg:block lg:flex-1" />
        <Form method="post" action="/auth/logout">
          <button type="submit">Logout</button>
        </Form>
      </nav>
    </header>
  )
}
