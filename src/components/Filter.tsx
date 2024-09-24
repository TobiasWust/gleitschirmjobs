'use client';
import { useCallback } from "react";
import categories from "../data/categories";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { HiBuildingOffice, HiOutlineStar, HiStar, HiUser } from "react-icons/hi2";
import { useFav } from "../store/useFav";
import { useSearchFilter } from "../store/useSearchFilter";

export default function Filter({ mobileView = false }: Readonly<{ mobileView?: boolean }>) {
  const pathname = '/';
  const activePathname = usePathname()
  const searchParams = useSearchParams()
  const favs = useFav((state) => state.favs);
  const toggleOnlyFavs = useSearchFilter((state) => state.toggleOnlyFavs);
  const onlyFavs = useSearchFilter((state) => state.onlyFavs);


  const activeCategory = searchParams.get('category')
  const activeListingType = searchParams.get('listingType')

  const isActiveCategory = (category: string) => category === activeCategory;
  const isActiveListingType = (listingType: string) => listingType === activeListingType;

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      // replace history
      window.history.replaceState({}, '', e.currentTarget.href)
    },
    []
  )

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const removeQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.delete(name)

      return params.toString()
    },
    [searchParams]
  )
  return (
    <div className={`${mobileView ? 'flex flex-row md:hidden' : 'md:flex hidden'} gap-2 flex-wrap`}>
      <ul className="menu menu-sm w-full md:w-auto md:menu-horizontal bg-base-300 rounded">
        <li>
          <Link className={`tooltip tooltip-right md:tooltip-bottom ${!activeCategory && activePathname === pathname ? 'active' : ''}`} href={pathname + '?' + removeQueryString('category')} onClick={handleLinkClick}
          >Alle</Link>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <Link className={`tooltip tooltip-right md:tooltip-bottom ${isActiveCategory(category.name) ? 'active' : ''}`} data-tip={category.description} href={
              pathname + '?' + createQueryString('category', category.name)
            }
              onClick={handleLinkClick}
            >{category.name}</Link>
          </li>
        ))}
      </ul>

      <ul className="menu menu-sm w-full md:w-auto md:menu-horizontal bg-base-300 rounded">
        <li>
          <Link className={`tooltip tooltip-bottom ${!activeListingType && activePathname === pathname ? 'active' : ''}`} href={pathname + '?' + removeQueryString('listingType')}
            onClick={handleLinkClick}
          >Alle</Link>
        </li>
        <li>
          <Link className={`tooltip tooltip-bottom ${isActiveListingType('search') ? 'active' : ''}`} href={pathname + '?' + createQueryString('listingType', 'search')}
            onClick={handleLinkClick}
          ><HiBuildingOffice className="inline-block" /> Arbeitgebende</Link>
        </li>
        <li>
          <Link className={`tooltip tooltip-bottom ${isActiveListingType('offer') ? 'active' : ''}`} href={pathname + '?' + createQueryString('listingType', 'offer')}
            onClick={handleLinkClick}
          ><HiUser className="inline-block" /> Arbeitende</Link>
        </li>
      </ul>

      <ul className="menu menu-sm w-full md:w-auto md:menu-horizontal bg-base-300 rounded">
        <li>
          <button onClick={toggleOnlyFavs}>
            {onlyFavs ?
              <HiStar className="text-yellow-500" /> :
              <HiOutlineStar />
            } Merkliste ({favs.length})</button>
        </li>
      </ul>
    </div>
  )
}
