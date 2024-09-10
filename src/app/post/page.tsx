'use client';
import { HiBuildingOffice, HiUser } from "react-icons/hi2";
import categories from "../../data/categories";
import Link from "next/link";
import useFormSubmit from "../../hooks/useFormSubmit";

export default function PostPage() {
  const { handleFormSubmit, error } = useFormSubmit();
  const status = 'ok';

  return (
    <main className="py-4">
      <div className="bg-base-200 rounded-2xl p-4 grid gap-4">
        <div className="flex justify-between">
          <h1 className="card-title flex-wrap">Neue Anzeige</h1>
        </div>
        <p className="text-yellow-300 p-4" >Soll die Anzeige immer ganz oben erscheinen? <Link className="link" href="/contact">Kontaktiere uns für ein Angebot</Link> nach dem Absenden der Anzeige.</p>

        {status === 'ok' ? (
          <div className="alert alert-success">
            Vielen Dank für deine Anzeige! Du solltest in Kürze eine E-Mail zur Verifizierung erhalten.
          </div>
        ) : (

          <form onSubmit={handleFormSubmit} name="post">
            {/*  method="POST" netlify-honeypot="bot-field" data-netlify="true" */}
            <input type="hidden" name="form-name" value="post" />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Anzeigenart</span>
              </label>
              <div className="flex gap-2">
                <label className="label cursor-pointer">
                  <input type="radio" defaultChecked name="listingType" value="search" className="radio" />
                  <span className="label-text pl-1"><HiBuildingOffice className="inline-block" /> Arbeitgebend</span>
                </label>
                <label className="label cursor-pointer">
                  <input type="radio" name="listingType" value="offer" className="radio" />
                  <span className="label-text pl-1"><HiUser className="inline-block" /> Arbeitend</span>
                </label>
              </div>

              <label className="label">
                <span className="label-text">Titel der Anzeige</span>
              </label>
              <input type="text" name="title" placeholder="Titel" required className="input input-bordered" maxLength={160} />

              <label className="label">
                <span className="label-text">Dein Name oder Unternehmen</span>
              </label>
              <input type="text" name="company" placeholder="Name" required className="input input-bordered" maxLength={160} />

              <label className="label">
                <span className="label-text">Website <span className="text-xs">(optional)</span></span>
              </label>
              <input type="text" name="companyUrl" placeholder="Website" className="input input-bordered" maxLength={160} />

              <label className="label">
                <span className="label-text">Ort <span className="text-xs">(optional)</span></span>
              </label>
              <input type="text" name="location" placeholder="Ort" className="input input-bordered" maxLength={60} />

              <label className="label">
                <span className="label-text">Anzeigentext</span>
              </label>
              <textarea placeholder="Beschreibung" name="description" required rows={5} className="textarea textarea-bordered" maxLength={5000}></textarea>

              <label className="label">
                <span className="label-text">Externer Link zur Ausschreibung <span className="text-xs">(optional)</span></span>
              </label>
              <input type="text" name="jobUrl" placeholder="Anzeigenlink" className="input input-bordered" maxLength={160} />

              <label className="label">
                <span className="label-text">Kategorie</span>
              </label>
              <select className="select select-bordered" name="categoryId" required>
                {
                  categories.map((category) => (
                    <option value={category.id} key={category.id}>{category.name}</option>
                  ))
                }
              </select>

              <label className="label">
                <span className="label-text">Beschäftigungsart <span className="text-xs">(optional)</span></span>
              </label>
              <div className="flex gap-2">
                <label className="label cursor-pointer">
                  <input type="checkbox" name="fulltime" className="checkbox" />
                  <span className="label-text pl-1">Vollzeit</span>
                </label>
                <label className="label cursor-pointer">
                  <input type="checkbox" name="parttime" className="checkbox" />
                  <span className="label-text pl-1">Teilzeit</span>
                </label>
                <label className="label cursor-pointer">
                  <input type="checkbox" name="freelance" className="checkbox" />
                  <span className="label-text pl-1">Freelance</span>
                </label>
              </div>

              <label className="label">
                <span className="label-text">E-Mail</span>
              </label>
              <input type="email" name="email" placeholder="E-Mail" required className="input input-bordered" maxLength={160} />

              <div className="p-4">
                <p className="text-xs text-slate-400">Die E-Mail-Adresse wird nicht veröffentlicht.</p>
                <p className="text-xs text-slate-400">Bewerbungen werden direkt an die angegebene E-Mail-Adresse gesendet.</p>
              </div>

              <button className="btn btn-primary mt-4" type="submit" disabled={status === 'pending'}>Senden</button>
              {status === 'error' && (
                <p>
                  Error: {error}
                </p>
              )}

              <p className="text-xs text-slate-400">Mit dem Absenden der Anzeige erklärst du dich mit unseren <a href="#" className="text-primary">Datenschutzbestimmungen</a> einverstanden.</p>

              <p className="pt-4">Die Anzeige wird veröffentlicht, sobald die Email verifiziert und die Anzeige manuell geprüft wurde.</p>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
