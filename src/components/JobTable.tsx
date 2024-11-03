'use client';
import JobCard from "./JobCard";
import { usePathname, useSearchParams } from 'next/navigation'
import { getCategoryNameById } from "../data/categories";
import { useCallback, useEffect, useMemo } from "react";
import { useSearchFilter } from "../store/useSearchFilter";
import { useFav } from "../store/useFav";
import { ClientJob } from "../types/supabaseTypes";
import { createQueryString } from "../utils/queryStrings";

const itemsPerPage = 10;

export default function JobTable({ jobs }: { jobs: ClientJob[] }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const category = searchParams.get('category')
  const listingType = searchParams.get('listingType')
  const page = searchParams.get('page') ? parseInt(searchParams.get('page') as string) : 1;

  const favs = useFav((state) => state.favs);
  const cleanUpFavs = useFav((state) => state.cleanUpFavs);
  const searchText = useSearchFilter((state) => state.searchText);
  const onlyFavs = useSearchFilter((state) => state.onlyFavs);

  useEffect(() => {
    cleanUpFavs(jobs.map((job) => job.id));
  }, [jobs, cleanUpFavs]);

  const filteredJobs = useMemo(() =>
    jobs
      // onlyFavs filter
      .filter((job) => {
        if (onlyFavs) {
          return favs.includes(job.id)
        }
        return true
      })
      // listing type filter
      .filter((job) => {
        if (listingType) {
          return job.listingType === listingType
        }
        return true
      })
      // category filter
      .filter((job) => {
        if (category) {
          const jobCategory = getCategoryNameById(job.categoryId);
          return jobCategory === category
        }
        return true
      })
      // searchText filter
      .filter(job => {
        return Object.values(job).some(value => {
          if (Array.isArray(value)) {
            return value.some(val => val.toLowerCase().includes(searchText.toLowerCase()));
          }
          return String(value).toLowerCase().includes(searchText.toLowerCase());
        })
      })
      // highlights first
      .sort((a, b) => {
        if (a.highlight && !b.highlight) {
          return -1;
        }
        if (!a.highlight && b.highlight) {
          return 1;
        }
        return 0;
      })
    , [category, searchText, onlyFavs, favs, listingType, jobs]);

  const paginatedJobs = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredJobs.slice(start, end);
  }, [filteredJobs, page]);

  const pageCount = Math.ceil(filteredJobs.length / itemsPerPage);

  const handlePage = useCallback((newPage: number) => {
    const url = pathname + '?' + createQueryString(searchParams, 'page', String(newPage));
    window.history.replaceState({}, '', url)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, searchParams]);

  // effect if filteredJobs.length changes check if there are still results on current page or go to last page
  useEffect(() => {
    const newPageCount = Math.ceil(filteredJobs.length / itemsPerPage);
    if (newPageCount < page) {
      handlePage(newPageCount);
    }
  }, [filteredJobs.length, page, handlePage]);

  return (
    <div>
      <p className="mb-4">
        {filteredJobs.length} Anzeigen gefunden
      </p>
      <div className="flex gap-4 flex-col">
        {
          paginatedJobs.map((job) =>
            <JobCard key={job.id} job={job} />
          )
        }
        <div className="join">
          <button className="join-item btn" disabled={page === 1} onClick={() => handlePage(page > 1 ? page - 1 : 1)}>&lt;</button>
          {
            Array.from({ length: pageCount }, (_, i) => i + 1).map((item) =>
              <button key={item} className={`join-item btn ${item === page ? 'btn-active' : ''}`} onClick={() => handlePage(item)}>{item}</button>
            )
          }
          <button className="join-item btn" disabled={page === pageCount} onClick={() => handlePage(page < pageCount ? page + 1 : pageCount)}>&gt;</button>
        </div>
      </div>
    </div>
  )
}
