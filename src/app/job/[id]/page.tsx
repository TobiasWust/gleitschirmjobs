'use client';

import { HiBuildingOffice, HiOutlineArrowTopRightOnSquare, HiUser } from "react-icons/hi2";
import jobs from "../../../data/jobs";
import { useMemo } from "react";
import { getCategoryNameById } from "../../../data/categories";

export default function Job({ params: { id } }: { params: { id: string } }) {
  const job = jobs.find((j) => j.id === Number(id));
  const category = useMemo(() => job ? getCategoryNameById(job.categoryId) : null, [job]);

  if (!job) {
    return <div>Job {id} not found</div>
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    console.log({ e });
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <main className="py-4">
      <div className="bg-base-200 rounded-2xl p-4 grid gap-4">
        <div className="flex justify-between">
          <h2 className="card-title">
            {job.listingType === 'search' ?
              <HiBuildingOffice /> :
              <HiUser />
            }
            {job.title}<span className="badge badge-xs badge-primary">{category}</span></h2>
          <div>{job.date}</div>
        </div>
        <div className="flex gap-4">
          <h3 className='font-semibold'>{
            job.companyUrl ? <a className="link" href={job.companyUrl} target="_blank" rel="noreferrer">{job.company}</a> : job.company
          }</h3>
          <h4 className="text-primary">{job.location}</h4>
        </div>
        <div>
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
        <form className="w-1/2 m-auto" onSubmit={handleSubmit}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input type="text" name="name" required placeholder="Name" className="input input-bordered w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input type="email" name="email" required placeholder="Email" className="input input-bordered w-full" />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Nachricht</span>
            </div>
            <textarea className="textarea textarea-bordered h-24" name="message" required placeholder="Nachricht"></textarea>
          </label>
          <div className="flex justify-end items-center gap-4 pt-4">
            <p className="text-sm">
              Diese Bewerbung wird direkt an {job.company} weitergeleitet.
            </p>
            <button type="submit" className="btn btn-primary">Bewerben</button>
          </div>
        </form>
      </div>
    </main>
  )
}
