'use client';
import { HiBuildingOffice, HiUser } from "react-icons/hi2";
// import { HiBuildingOffice, HiOutlineStar, HiStar, HiUser } from "react-icons/hi2";
import { useMemo } from "react"
import { getCategoryNameById } from "../data/categories";
// import { useFav } from "../store/useFav";
import Link from "next/link";
import { ClientJob } from "../types/supabaseTypes";
import slugify from "slugify";

export default function JobCard({ job }: { job: ClientJob }) {
  // const toggleFav = useFav((state) => state.toggleFav);
  // const favs = useFav((state) => state.favs);

  const category = useMemo(() => getCategoryNameById(job.categoryId), [job.categoryId]);

  // const handleFav = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   toggleFav(job.id);
  // }

  return (
    <article>
      <Link href={`/job/${job.id}/${slugify(job.company)}-${slugify(job.title)}`}>
        <div className={`card card-compact bg-base-200 w-full shadow-md ${job.highlight ? 'border-solid border-2 border-yellow-300' : ''} hover:shadow-secondary transition-shadow`}>
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title flex-wrap text-primary">
                {job.listingType === 'search' ?
                  <HiBuildingOffice /> :
                  <HiUser />
                }
                {job.title}<span className="badge badge-xs">{category}</span></h2>
              <div className="text-xs">{new Date(job.created_at).toLocaleDateString('de')}</div>
            </div>
            <div className="flex gap-4">
              <h3 className="font-semibold text-primary">{job.company}</h3>
              <span className="text-slate-400">{job.location}</span>
            </div>
            <div className="line-clamp-2">
              {job.description}
            </div>
            <div className="card-actions justify-between items-center">
              <div className="card-actions">
                {
                  job.employmentType?.map((type) => <div className="badge badge-outline" key={type}>{type}</div>)
                }
              </div>
              <div className="card-actions justify-end flex-1">
                <div className="tooltip tooltip-bottom" data-tip="Wird auf deinem Gerät gemerkt.">
                  {/* <button className="btn btn-outline" onClick={handleFav}>{favs.includes(job.id) ? <HiStar className="text-yellow-300" /> : <HiOutlineStar />}Merken</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article >
  )
}
