import { NavLink, useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'

export const loader: LoaderFunction = () => {
  const links = [
    'home',
    'world',
    'politics',
    'business',
    'opinion',
    'technology',
    'science',
    'sports',
    'arts',
    'books',
    'automobiles',
    'fashion',
    'food',
    'health',
    'insider',
    'magazine',
    'movies',
    'nyregion',
    'obituaries',
    'realestate',
    'sundayreview',
    'theater',
    't-magazine',
    'travel',
    'upshot',
    'us',
  ]
  return links
}

export default function SectionList() {
  const menuLinks = useLoaderData<Array<string>>()
  return (
    <div>
      <h1 className="mb-4 text-xl font-bold capitalize">Sections</h1>
      <ul className="container mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4">
        {menuLinks.map(link => (
          <li className="col-span-1" key={link}>
            <NavLink
              to={`/section/${link}`}
              className={({ isActive }) =>
                `${
                  isActive ? 'font-bold' : ''
                } capitalize text-sm hover:text-gray-600 hover:-translate-y-1`
              }
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
