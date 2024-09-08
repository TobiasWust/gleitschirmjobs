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
    <div className={`${mobileView ? 'md:flex flex-row hidden' : 'md:flex hidden'} gap-4 flex-wrap`}>
      <ul className="menu menu-sm menu-horizontal bg-base-300 rounded">
        <li>
          <div className={`tooltip tooltip-bottom ${!activeCategory && activePathname === pathname ? 'active' : ''}`} >
            <Link href={pathname + '?' + removeQueryString('category')}
            >Alle</Link>
          </div>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <div className={`tooltip tooltip-bottom ${isActiveCategory(category.name) ? 'active' : ''}`} data-tip={category.description}>
              <Link href={
                pathname + '?' + createQueryString('category', category.name)
              }
              >{category.name}</Link>
            </div>
          </li>
        ))}
      </ul>

      <ul className="menu menu-sm menu-horizontal bg-base-300 rounded">
        <li>
          <div className={`tooltip tooltip-bottom ${!activeListingType && activePathname === pathname ? 'active' : ''}`}>
            <Link href={pathname + '?' + removeQueryString('listingType')}
            >Alle</Link>
          </div>
        </li>
        <li>
          <div className={`tooltip tooltip-bottom ${isActiveListingType('search') ? 'active' : ''}`}>
            <Link href={pathname + '?' + createQueryString('listingType', 'search')}
            ><HiBuildingOffice className="inline-block" /> Arbeitgebende</Link>
          </div>
        </li>
        <li>
          <div className={`tooltip tooltip-bottom ${isActiveListingType('offer') ? 'active' : ''}`}>
            <Link href={pathname + '?' + createQueryString('listingType', 'offer')}
            ><HiUser className="inline-block" /> Arbeitende</Link>
          </div>
        </li>
      </ul>

      <ul className="menu menu-sm menu-horizontal bg-base-300 rounded">
        <li>
          <button onClick={toggleOnlyFavs}>
            {onlyFavs ?
              <HiStar className="text-yellow-300" /> :
              <HiOutlineStar />
            } Nur Germerkte ({favs.length})</button>
        </li>
      </ul>
    </div>
  )
}
