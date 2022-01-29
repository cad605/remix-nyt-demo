import { NavLink, useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'

export async function loader() {
  const links = [
    'home',
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
  return links
}

export default function SectionList() {
  const menuLinks = useLoaderData<Array<string>>()
  return (
    <div>
      <h1 className="mb-4 text-xl font-bold capitalize">Sections</h1>
      <ul className="container mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
        {menuLinks.map(link => (
          <li className="col-span-1">
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
          </li>
        ))}
      </ul>
    </div>
  )
}
