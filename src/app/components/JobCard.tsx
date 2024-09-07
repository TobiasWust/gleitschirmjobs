'use client';
import { useMemo, useState } from "react"
import { Job } from "../data/jobs";
import { getCategoryNameById } from "../data/categories";

export default function JobCard({ job }: { job: Job }) {
  const [expanded, setExpanded] = useState(false);

  const category = useMemo(() => getCategoryNameById(job.categoryId), [job.categoryId]);

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{job.title}<span className="badge badge-xs badge-primary">{category}</span></h2>
          <div className="text-xs">{job.date}</div>
        </div>
        <h3 className="font-semibold">{job.company}</h3>
        <button className="text-left" type="button" onClick={() => setExpanded(!expanded)}>
          <div className={`${expanded ? "line-clamp-none max-h-40" : "line-clamp-2 max-h-14"} transition-[max-height] duration-500`}>{job.description}</div>
          {/* {expanded ? <span className="text-primary">Weniger anzeigen</span> : <span className="text-primary">Mehr anzeigen</span>} */}
        </button>
        <div className="card-actions justify-between items-center">
          <div className="card-actions">
            {
              job.employmentType.map((type) => <div className="badge badge-outline" key={type}>{type}</div>)
            }
          </div>
          <div className="card-actions">
            <button className="btn">Merken</button>
            <button className="btn btn-primary">Bewerben</button>
          </div>
        </div>
      </div>
    </div>
  )
}
