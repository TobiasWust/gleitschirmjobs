'use client';

import { useCallback } from "react";
import categories from "../data/categories";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function CategoryBar() {
  const pathname = '/';
  const searchParams = useSearchParams()

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
    <div className="navbar sticky top-0 bg-base-200 z-10">
      <ul className="menu menu-sm menu-horizontal px-1">
        <li>
          <div className={`tooltip tooltip-bottom ${activeCategory ? '' : 'active'}`} >
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
      </ul>
    </div>
  );
}
