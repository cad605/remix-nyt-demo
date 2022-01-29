import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { NavLink, useMatches, useNavigate } from 'remix'
import Logo from './logo'

const menuLinks: Array<string> = [
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

export default function Submenu() {
  const navigate = useNavigate()
  const matches = useMatches()
  const selectRef: React.MutableRefObject<any> = useRef()

  function handleMenuSelect(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value
    return navigate(`/section/${value}`, { replace: true })
  }

  useEffect(() => {
    selectRef.current.value = matches[0].params.id ?? 'home'
  }, [matches])

  return (
    <div className="pt-2 pb-2 border-b-2 border-dotted border-gray-600">
      <Logo></Logo>
      <div className="hidden md:flex md:flex-row md:space-y-0 flex-col items-center space-y-1 justify-evenly">
        {menuLinks.slice(0, 9).map(link => (
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
        ))}
      </div>
      <div className="md:hidden">
        <select
          id="section-select"
          ref={selectRef}
          onChange={handleMenuSelect}
          placeholder={'Select a section to read'}
        >
          {menuLinks.slice(0, 9).map(link => (
            <option key={link} value={link}>
              {link.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
