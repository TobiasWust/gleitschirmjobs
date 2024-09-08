'use client';
import { HiOutlineArrowTopRightOnSquare, HiOutlineStar, HiStar } from "react-icons/hi2";
import { useMemo } from "react"
import { Job } from "../data/jobs";
import { getCategoryNameById } from "../data/categories";
import { useFav } from "../store/useFav";
import Link from "next/link";

export default function JobCard({ job }: { job: Job }) {
  const toggleFav = useFav((state) => state.toggleFav);
  const favs = useFav((state) => state.favs);

  const category = useMemo(() => getCategoryNameById(job.categoryId), [job.categoryId]);

  const handleFav = (e) => {
    e.stopPropagation();
    e.preventDefault();
    toggleFav(job.id);
  }

  return (
    <article>
      <Link href={`/job/${job.id}`}>
        <div className={`card card-compact bg-base-100 w-full shadow-md ${job.highlight ? 'border-solid border-2 border-yellow-300' : ''} hover:shadow-secondary transition-shadow`}>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title">{job.title}<span className="badge badge-xs badge-primary">{category}</span></h2>
              <div className="text-xs">{job.date}</div>
            </div>
            <div className="flex gap-4">
              <h3 className="font-semibold text-primary">{job.company}</h3>
              <span className="text-slate-400">{job.location}</span>
            </div>
            <div>
              {job.description}
            </div>
            {/* {job.jobUrl &&
            <a className="text-primary flex items-center gap-1" href={job.jobUrl} target="_blank" rel="noreferrer">Ausschreibung auf externer Seite <HiOutlineArrowTopRightOnSquare /></a>} */}
            <div className="card-actions justify-between items-center">
              <div className="card-actions">
                {
                  job.employmentType.map((type) => <div className="badge badge-outline" key={type}>{type}</div>)
                }
              </div>
              <div className="card-actions">
                <button className="btn" onClick={handleFav}>{favs.includes(job.id) ? <HiStar className="text-yellow-300" /> : <HiOutlineStar />}Merken</button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article >
  )
}
