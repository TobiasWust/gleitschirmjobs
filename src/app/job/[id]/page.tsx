'use client';

import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import jobs from "../../../data/jobs";

export default function Job({ params: { id } }: { params: { id: string } }) {
  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return <div>Job {id} not found</div>
  }
  // const category = useMemo(() => getCategoryNameById(job.categoryId), [job.categoryId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    console.log({ e });
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <main>
      <div className="modal-box card-body">
        <div className="flex justify-between">
          {/* <h2 className="card-title">{job.title}<span className="badge badge-xs badge-primary">{category}</span></h2> */}
          <div className="text-xs">{job.date}</div>
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
        <div className="card-actions justify-between items-center">
          <div className="card-actions">
            {
              job.employmentType && job.employmentType.map((type) => <div className="badge badge-outline" key={type}>{type}</div>)
            }
            <a className="text-primary flex items-center gap-1" href={job.jobUrl} target="_blank" rel="noreferrer">Ausschreibung auf externer Seite <HiOutlineArrowTopRightOnSquare /></a>
          </div>
        </div>
        <form method="dialog" onSubmit={handleSubmit}>
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
          <div className="modal-action">
            <p className="text-sm">
              Diese Bewerbung wird direkt an {job.company} weitergeleitet.
            </p>
            <button type="submit" className="btn btn-primary">Bewerben</button>
          </div>
        </form>
      </div >
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </main >
  )
}
