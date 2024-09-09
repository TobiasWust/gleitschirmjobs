'use client';
import Link from "next/link";
import Filter from "./Filter";
import { Suspense } from "react";
import { HiBars3 } from "react-icons/hi2";

export default function Filterbar() {


  return (
    <div className="navbar sticky top-0 bg-base-100 z-10 p-0">
      <div className="max-w-screen-xl md:mx-auto p-4 md:px-0 flex gap-4 flex-wrap justify-between w-full">
        <label htmlFor="mobileNav" className="btn md:hidden">
          <HiBars3 />
        </label>
        <Suspense>
          <Filter />
        </Suspense>

        <div className="flex-1 text-right">
          <Link href="/post" className="btn btn-primary ">Kostenlos inserieren</Link>
        </div>
      </div>
    </div>
  );
}
