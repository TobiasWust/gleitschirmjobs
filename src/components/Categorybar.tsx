'use client';

import { useCallback } from "react";
import categories from "../data/categories";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

// export const dynamic = 'force-dynamic'

export default function CategoryBar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

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
    <div className="navbar">
      <ul className="menu menu-horizontal px-1">
        <li>
          <div className="tooltip tooltip-bottom" >
            <Link href={
              pathname + '?' + removeQueryString('category')
            }
            >Alle</Link>
          </div>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <div className="tooltip tooltip-bottom" data-tip={category.description}>
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
