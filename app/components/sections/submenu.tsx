import { NavLink } from 'remix'
import Logo from '../logo'

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
  return (
    <div>
      <Logo></Logo>
      <div className="mt-4 flex flex-col space-y-1 justify-evenly border-b-2 border-dotted border-zinc-600 pb-2 sm:flex-row sm:space-y-0">
        {menuLinks.slice(0, 5).map(link => (
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
    </div>
  )
}
