'use client';

import JobCard from "./JobCard";
import jobs from "../data/jobs";
import { useSearchParams } from 'next/navigation'
import { getCategoryNameById } from "../data/categories";
import { useMemo } from "react";

export default function JobTable() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  const filteredJobs = useMemo(() =>
    jobs
      .filter((job) => {
        if (category) {
          const jobCategory = getCategoryNameById(job.categoryId);
          return jobCategory === category
        }
        return true
      })
      .sort((a, b) => {
        if (a.highlight && !b.highlight) {
          return -1;
        }
        if (!a.highlight && b.highlight) {
          return 1;
        }
        return 0;
      })
    , [category]);

  return (
    <div className="flex gap-4 flex-col">
      {
        filteredJobs.map((job) =>
          <JobCard key={job.id} job={job} />
        )
      }
    </div>
  )
}
