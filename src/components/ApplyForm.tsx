'use client';
import { Job } from "../types/job.type";

export default function ApplyForm({ job }: { job: Job }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    console.log({ e });
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <form className="md:w-1/2 m-auto" onSubmit={handleSubmit}>
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
  )
}
