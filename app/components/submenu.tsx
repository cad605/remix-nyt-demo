import { ChangeEvent } from 'react'
import { NavLink, useNavigate } from 'remix'
import Logo from './logo'

const menuLinks: Array<string> = [
  'world',
  'politics',
  'business',
  'opinion',
  'tech',
  'science',
  'sports',
  'arts',
  'books',
  'automobiles',
  'business',
  'fashion',
  'food',
  'health',
  'home',
  'insider',
  'magazine',
  'movies',
  'nyregion',
  'obituaries',
  'opinion',
  'politics',
  'realestate',
  'science',
  'sports',
  'sundayreview',
  'technology',
  'theater',
  't-magazine',
  'travel',
  'upshot',
  'us',
  'world',
]

export default function Submenu() {
  const navigate = useNavigate()
  function handleMenuSelect(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value
    return navigate(`/section/${value}`, { replace: true })
  }
  return (
    <div className="pt-2 pb-2 border-b-2 border-dotted border-slate-600">
      <Logo></Logo>
      <div className="hidden md:flex md:flex-row md:space-y-0 flex-col items-center space-y-1 justify-evenly">
        {menuLinks.slice(0, 9).map(link => (
          <NavLink
            key={link}
            to={`/section/${link}`}
            className={({ isActive }) =>
              `${
                isActive ? 'text-slate-900 underline font-semibold' : ''
              } uppercase text-slate-700 text-sm focus:text-slate-500 hover:text-slate-500 hover:underline`
            }
          >
            {link}
          </NavLink>
        ))}
      </div>
      <div className="md:hidden">
        <select onChange={handleMenuSelect}>
          {menuLinks.slice(0, 9).map(link => (
            <option key={link} value={link}>
              {link}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
