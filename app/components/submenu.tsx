import { ChangeEvent, useEffect, useRef } from 'react'
import { NavLink, useMatches, useNavigate } from 'remix'
import Logo from './logo'

const menuLinks = [
  'home',
  'world',
  'politics',
  'business',
  'opinion',
  'tech',
  'science',
  'sports',
  'arts',
]

export default function Submenu() {
  const navigate = useNavigate()
  const matches = useMatches()
  const ref = useRef<HTMLSelectElement>(null)

  function handleMenuSelect(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value
    return navigate(`/section/${value}`, { replace: true })
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.value = matches[0].params.section ?? 'home'
    }
  }, [matches])

  return (
    <div className="pt-2 pb-2 border-b-2 border-dotted border-gray-600">
      <Logo></Logo>
      <div className="hidden md:flex md:flex-row md:space-y-0 flex-col items-center space-y-1 justify-evenly">
        {menuLinks
          ? menuLinks.slice(0, 9).map(link => (
              <NavLink
                key={link}
                to={`/section/${link}`}
                className={({ isActive }) =>
                  `${
                    isActive ? 'font-bold' : ''
                  } capitalize text-sm hover:text-gray-600 hover:-translate-y-1`
                }
              >
                {link}
              </NavLink>
            ))
          : null}
        <NavLink
          to={`/section/list`}
          className={({ isActive }) =>
            `${
              isActive ? 'font-bold' : ''
            } capitalize text-sm font-bold hover:text-gray-600 hover:-translate-y-1`
          }
        >
          ...
        </NavLink>
      </div>
      <div className="md:hidden">
        <select
          id="section-select"
          ref={ref}
          onChange={handleMenuSelect}
          placeholder={'Select a section to read'}
        >
          {menuLinks
            ? menuLinks.slice(0, 9).map(link => (
                <option key={link} value={link}>
                  {link.toUpperCase()}
                </option>
              ))
            : null}
          <option value={'list'}>More...</option>
        </select>
      </div>
    </div>
  )
}
