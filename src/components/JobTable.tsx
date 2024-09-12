'use client';
import JobCard from "./JobCard";
import { useSearchParams } from 'next/navigation'
import { getCategoryNameById } from "../data/categories";
import { useEffect, useMemo, useState } from "react";
import { useSearchFilter } from "../store/useSearchFilter";
import { useFav } from "../store/useFav";
import { ClientJob } from "../types/supabaseTypes";

const itemsPerPage = 10;

export default function JobTable({ jobs }: { jobs: ClientJob[] }) {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const listingType = searchParams.get('listingType')

  const favs = useFav((state) => state.favs);
  const cleanUpFavs = useFav((state) => state.cleanUpFavs);
  const searchText = useSearchFilter((state) => state.searchText);
  const onlyFavs = useSearchFilter((state) => state.onlyFavs);

  const [page, setPage] = useState(1);

  const handlePage = (page: number) => {
    setPage(page);
  }

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

  return (
    <div>
      <p className="text-neutral-content mb-4">
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
