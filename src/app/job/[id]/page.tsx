import { HiBuildingOffice, HiOutlineArrowTopRightOnSquare, HiUser } from "react-icons/hi2";
import { useMemo } from "react";
import { getCategoryNameById } from "../../../data/categories";
import { createClient } from "../../../utils/supabase/server";
import ApplyForm from "../../../components/ApplyForm";

export default async function Job({ params: { id } }: { params: { id: string } }) {
  const supabase = await createClient();
  const { data: job } = await supabase.from("jobs").select("*").eq("id", id).single();

  const category = getCategoryNameById(job.categoryId);

  if (!job) {
    return <div>Job {id} not found</div>
  }

  return (
    <main className="py-4">
      <div className="bg-base-200 rounded-2xl p-4 grid gap-4">
        <div className="flex justify-between">
          <h2 className="card-title flex-wrap">
            {job.listingType === 'search' ?
              <HiBuildingOffice /> :
              <HiUser />
            }
            {job.title}<span className="badge badge-xs badge-primary">{category}</span>
          </h2>
          <div>{new Date(job.created_at).toLocaleDateString('de')}</div>
        </div>
        <div className="flex gap-4">
          <h3 className='font-semibold'>{
            job.companyUrl ? <a className="link" href={job.companyUrl} target="_blank" rel="noreferrer">{job.company}</a> : job.company
          }</h3>
          <h4 className="text-primary">{job.location}</h4>
        </div>
        <div className="whitespace-break-spaces">
          {job.description}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            {
              job.employmentType && job.employmentType.map((type) => <div className="badge badge-outline" key={type}>{type}</div>)
            }
          </div>
          {job.jobUrl && <a className="text-primary flex items-center gap-1" href={job.jobUrl} target="_blank" rel="noreferrer">Ausschreibung auf externer Seite <HiOutlineArrowTopRightOnSquare /></a>}
        </div>
        <ApplyForm job={job} />
      </div>
    </main>
  )
}
