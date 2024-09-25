'use client';

import useFormSubmit from "../hooks/useFormSubmit";
import applyStore from "../store/applyStore";

export default function ApplyForm({ jobId, company }: { jobId: number, company: string }) {
  const { handleFormSubmit, error, status } = useFormSubmit();
  const name = applyStore((state) => state.name);
  const email = applyStore((state) => state.email);
  const message = applyStore((state) => state.message);
  const setName = applyStore((state) => state.setName);
  const setEmail = applyStore((state) => state.setEmail);
  const setMessage = applyStore((state) => state.setMessage);

  return (
    status === 'ok' ? (
      <div className="alert alert-success">
        Vielen Dank für deine Nachricht. Wir haben deine Nachricht an {company} gesendet.
      </div>
    ) : (
      <form onSubmit={handleFormSubmit} name="apply" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <input type="hidden" name="form-name" value="apply" />
        <input type="hidden" name="jobId" value={jobId} />
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input type="text" name="name" required placeholder="Name" className="input input-bordered w-full"
            value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input type="email" name="email" required placeholder="Email" className="input input-bordered w-full"
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Nachricht</span>
          </div>
          <textarea className="textarea textarea-bordered h-24" name="message" required placeholder="Nachricht"
            value={message} onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <p className="text-sm">Deine Eingaben werden auf diesem Gerät gespeichert.</p>
        <div className="flex justify-end items-center gap-4 pt-4">
          <p className="text-sm">
            Diese Nachricht wird direkt an {company} gesendet.<br />Du erhältst eine Kopie dieser Nachricht an deine Email-Adresse.
          </p>
          <button type="submit" className="btn btn-primary">Senden</button>
        </div>
        {status === 'error' && (
          <p>
            Error: {error}
          </p>
        )}
      </form>
    )
  )
}
