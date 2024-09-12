'use client';

import useFormSubmit from "../hooks/useFormSubmit";

export default function ApplyForm({ jobId, company }: { jobId: number, company: string }) {
  const { handleFormSubmitTest } = useFormSubmit();

  return (
    <form className="md:w-1/2 m-auto" onSubmit={handleFormSubmitTest} name="apply" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="form-name" value="apply" />
      <input type="hidden" name="jobId" value={jobId} />
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
          Diese Nachricht wird direkt an {company} gesendet.
        </p>
        <button type="submit" className="btn btn-primary" disabled>Senden</button>
        Sorry, das Formular ist noch nicht funktionsfähig. :)
      </div>
    </form>
  )
}
