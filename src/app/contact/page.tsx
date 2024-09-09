'use client';

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm as HTMLFormElement);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>,).toString()
      });
      if (res.status === 200) {
        setStatus('ok');
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(`${e}`);
    }
  };

  return (
    <main className="py-4">
      <div className="bg-base-200 rounded-2xl p-4 grid gap-4">
        <div className="flex justify-between">
          <h1 className="card-title flex-wrap">Kontakt</h1>
        </div>
        <p>
          Du hast Fragen, Anregungen oder möchtest uns einfach nur Feedback geben? Dann schreib uns eine Nachricht. Wir freuen uns auf deine Nachricht!
        </p>
        <p>Bei den Folgnden Themen Hilft dir unser Team gerne weiter:</p>
        <ul className="list-disc list-inside">
          <li>&quot;Highlight&quot;-Anzeigen, die immer ganz oben erscheinen</li>
          <li>Werbung auf unserer Website</li>
          <li>Partnerschaften</li>
          <li>Feedback zu unseren Inhalten</li>
        </ul>
        <p>Hol dir jetzt ein unverbindliches Angebot!</p>
        <form onSubmit={handleFormSubmit} name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-control">
            <label className="label">
              <span className="label-text">Dein Name oder Unternehmen</span>
            </label>
            <input type="text" placeholder="Name" required className="input input-bordered" maxLength={160} />

            <label className="label">
              <span className="label-text">Deine E-Mail-Adresse</span>
            </label>
            <input type="email" placeholder="E-Mail" required className="input input-bordered" maxLength={160} />

            <label className="label">
              <span className="label-text">Deine Nachricht</span>
            </label>
            <textarea placeholder="Nachricht" required rows={5} className="textarea textarea-bordered" maxLength={5000}></textarea>

            <button className="btn btn-primary mt-4" type="submit" disabled={status === 'pending'}>Absenden</button>
            {status === 'ok' && (
              <p>
                Vielen Dank für deine Nachricht! Wir melden uns so schnell wie möglich bei dir.
              </p>
            )}
            {status === 'error' && (
              <p>
                Error: {error}
              </p>
            )}
          </div>
        </form>
      </div>
    </main>
  )
}
