'use client';

import { useCallback } from "react";
import categories from "../data/categories";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { HiStar } from "react-icons/hi2";
import { useFav } from "../store/useFav";

export default function CategoryBar() {
  const pathname = '/';
  const activePathname = usePathname()
  const searchParams = useSearchParams()
  const favs = useFav((state) => state.favs);

  const activeCategory = searchParams.get('category')
  const isActive = (category: string) => category === activeCategory;

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
    <div className="navbar sticky flex justify-between flex-wrap top-0 bg-base-200 z-10">
      <ul className="menu menu-sm menu-horizontal px-1">
        <li>
          <div className={`tooltip tooltip-bottom ${!activeCategory && activePathname === pathname ? 'active' : ''}`} >
            <Link href={pathname + '?' + removeQueryString('category')}
            >Alle</Link>
          </div>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <div className={`tooltip tooltip-bottom ${isActive(category.name) ? 'active' : ''}`} data-tip={category.description}>
              <Link href={
                pathname + '?' + createQueryString('category', category.name)
              }
              >{category.name}</Link>
            </div>
          </li>
        ))}

        <li className="ps-4">
          <button><HiStar className="text-yellow-300" /> Nur Germerkte ({favs.length})</button>
        </li>
      </ul>

      <Link href="/inserat" className="btn btn-primary ">Kostenlos inserieren</Link>
    </div>
  );
}
