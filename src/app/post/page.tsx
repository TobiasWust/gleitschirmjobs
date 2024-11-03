'use client';
import { HiBuildingOffice, HiUser } from "react-icons/hi2";
import categories from "../../data/categories";
import Link from "next/link";
import useFormSubmit from "../../hooks/useFormSubmit";
import postStore from "../../store/postStore";

export default function PostPage() {
  const { handleFormSubmit, error, status } = useFormSubmit();
  const categoryId = postStore((state) => state.categoryId);
  const company = postStore((state) => state.company);
  const companyUrl = postStore((state) => state.companyUrl);
  const jobUrl = postStore((state) => state.jobUrl);
  const listingType = postStore((state) => state.listingType);
  const location = postStore((state) => state.location);
  const title = postStore((state) => state.title);
  const message = postStore((state) => state.message);
  const email = postStore((state) => state.email);
  const fulltime = postStore((state) => state.fulltime);
  const parttime = postStore((state) => state.parttime);
  const freelance = postStore((state) => state.freelance);
  const setCategoryId = postStore((state) => state.setCategoryId);
  const setCompany = postStore((state) => state.setCompany);
  const setCompanyUrl = postStore((state) => state.setCompanyUrl);
  const setJobUrl = postStore((state) => state.setJobUrl);
  const setListingType = postStore((state) => state.setListingType);
  const setLocation = postStore((state) => state.setLocation);
  const setTitle = postStore((state) => state.setTitle);
  const setMessage = postStore((state) => state.setMessage);
  const setEmail = postStore((state) => state.setEmail);
  const setFulltime = postStore((state) => state.setFulltime);
  const setParttime = postStore((state) => state.setParttime);
  const setFreelance = postStore((state) => state.setFreelance);

  return (
    <main className="py-4">
      <div className="bg-base-200 rounded-2xl p-4 grid gap-4">
        <div className="flex justify-between">
          <h1 className="card-title flex-wrap">Neue Anzeige</h1>
        </div>
        <p className="text-yellow-500 p-4" >Soll die Anzeige immer ganz oben erscheinen? <Link className="link" href="/contact">Kontaktiere uns für ein Angebot</Link> nach dem Absenden der Anzeige.</p>

        {status === 'ok' ? (
          <div className="alert alert-success">
            Vielen Dank für deine Anzeige! Du solltest in Kürze eine E-Mail zur Verifizierung erhalten.
          </div>
        ) : (

          <form onSubmit={(e) => handleFormSubmit(e).then(() => document.querySelector('main')?.scrollIntoView())} name="post"
            method="POST" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="form-name" value="post" />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Anzeigenart</span>
              </label>
              <div className="flex gap-2">
                <label className="label cursor-pointer">
                  <input type="radio" name="listingType" value="search" className="radio"
                    onChange={(e) => setListingType(e.target.value)}
                    checked={listingType === 'search'}
                  />
                  <span className="label-text pl-1"><HiBuildingOffice className="inline-block" /> Arbeitgebend</span>
                </label>
                <label className="label cursor-pointer">
                  <input type="radio" name="listingType" value="offer" className="radio"
                    onChange={(e) => setListingType(e.target.value)}
                    checked={listingType === 'offer'}
                  />
                  <span className="label-text pl-1"><HiUser className="inline-block" /> Arbeitend</span>
                </label>
              </div>

              <label className="label">
                <span className="label-text">Titel der Anzeige</span>
              </label>
              <input type="text" name="title" placeholder="Titel" required className="input input-bordered" maxLength={160}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />

              <label className="label">
                <span className="label-text">Dein Name oder Unternehmen</span>
              </label>
              <input type="text" name="company" placeholder="Name" required className="input input-bordered" maxLength={160}
                onChange={(e) => setCompany(e.target.value)}
                value={company}
              />

              <label className="label">
                <span className="label-text">Website <span className="text-xs">(optional)</span></span>
              </label>
              <input type="url" pattern="https?://.+" name="companyUrl" placeholder="https://beispiel.at" className="input input-bordered" maxLength={160}
                onChange={(e) => setCompanyUrl(e.target.value)}
                value={companyUrl}
              />

              <label className="label">
                <span className="label-text">Ort <span className="text-xs">(optional)</span></span>
              </label>
              <input type="text" name="location" placeholder="Ort" className="input input-bordered" maxLength={60}
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />

              <label className="label">
                <span className="label-text">Anzeigentext</span>
              </label>
              <textarea placeholder="Beschreibung" name="description" required rows={5} className="textarea textarea-bordered" maxLength={5000}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              ></textarea>

              <label className="label">
                <span className="label-text">Externer Link zur Ausschreibung <span className="text-xs">(optional)</span></span>
              </label>
              <input type="url" pattern="https?://.+" name="jobUrl" placeholder="https://beispiel.at" className="input input-bordered" maxLength={160}
                onChange={(e) => setJobUrl(e.target.value)}
                value={jobUrl}
              />

              <label className="label">
                <span className="label-text">Kategorie</span>
              </label>
              <select className="select select-bordered" name="categoryId" required
                onChange={(e) => setCategoryId(Number(e.target.value))}
                value={categoryId}
              >
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
                  <input type="checkbox" name="fulltime" className="checkbox"
                    onChange={(e) => setFulltime(e.target.checked)}
                    checked={fulltime}
                  />
                  <span className="label-text pl-1">Vollzeit</span>
                </label>
                <label className="label cursor-pointer">
                  <input type="checkbox" name="parttime" className="checkbox"
                    onChange={(e) => setParttime(e.target.checked)}
                    checked={parttime}
                  />
                  <span className="label-text pl-1">Teilzeit</span>
                </label>
                <label className="label cursor-pointer">
                  <input type="checkbox" name="freelance" className="checkbox"
                    onChange={(e) => setFreelance(e.target.checked)}
                    checked={freelance}
                  />
                  <span className="label-text pl-1">Freelance</span>
                </label>
              </div>

              <label className="label">
                <span className="label-text">E-Mail</span>
              </label>
              <input type="email" name="email" placeholder="E-Mail" required className="input input-bordered" maxLength={160}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <div className="p-4">
                <p className="text-xs text-slate-500">Die E-Mail-Adresse wird nicht veröffentlicht.</p>
                <p className="text-xs text-slate-500">Bewerbungen werden direkt an die angegebene E-Mail-Adresse gesendet.</p>
              </div>

              <p className="text-sm">Deine Eingaben werden auf diesem Gerät gespeichert.</p>

              <button className="btn btn-primary mt-4" type="submit" disabled={status === 'pending'}>Senden</button>
              {status === 'error' && (
                <p>
                  Error: {error}
                </p>
              )}

              <p className="text-xs text-slate-500">Mit dem Absenden der Anzeige erklärst du dich mit unseren <Link href="/privacy" className="text-primary">Datenschutzbestimmungen</Link> einverstanden.</p>

              <p className="pt-4">Die Anzeige wird veröffentlicht, sobald die Email verifiziert und die Anzeige manuell geprüft wurde.</p>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
