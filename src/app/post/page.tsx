// id: number
// title: string;#
// company: string;#
// companyUrl?: string;#
// location?: string;#
// created_at: string;#
// description: string;#
// jobUrl?: string;
// categoryId: number;
// employmentType?: ('Vollzeit' | 'Teilzeit' | 'Freelance')[]
// listingType: 'offer' | 'search';
// highlight?: boolean;
// email: string;

import { HiBuildingOffice, HiUser } from "react-icons/hi2";
import categories from "../../data/categories";
import Link from "next/link";

export default function PostPage() {
  return (
    <main className="py-4">
      <div className="bg-base-200 rounded-2xl p-4 grid gap-4">
        <div className="flex justify-between">
          <h1 className="card-title flex-wrap">Neue Anzeige</h1>
        </div>
        <p className="text-yellow-300 p-4" >Soll die Anzeige immer ganz oben erscheinen? <Link className="link" href="/contact">Kontaktiere uns für ein Angebot</Link> nach dem Absenden der Anzeige.</p>
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Anzeigenart</span>
            </label>
            <div className="flex gap-2">
              <label className="label cursor-pointer">
                <input type="radio" defaultChecked name="listingType" className="radio" />
                <span className="label-text pl-1"><HiBuildingOffice className="inline-block" /> Arbeitgebend</span>
              </label>
              <label className="label cursor-pointer">
                <input type="radio" name="listingType" className="radio" />
                <span className="label-text pl-1"><HiUser className="inline-block" /> Arbeitend</span>
              </label>
            </div>

            <label className="label">
              <span className="label-text">Titel der Anzeige</span>
            </label>
            <input type="text" placeholder="Titel" required className="input input-bordered" maxLength={160} />

            <label className="label">
              <span className="label-text">Dein Name oder Unternehmen</span>
            </label>
            <input type="text" placeholder="Name" required className="input input-bordered" maxLength={160} />

            <label className="label">
              <span className="label-text">Website <span className="text-xs">(optional)</span></span>
            </label>
            <input type="text" placeholder="Website" className="input input-bordered" maxLength={160} />

            <label className="label">
              <span className="label-text">Ort <span className="text-xs">(optional)</span></span>
            </label>
            <input type="text" placeholder="Ort" className="input input-bordered" maxLength={60} />

            <label className="label">
              <span className="label-text">Anzeigentext</span>
            </label>
            <textarea placeholder="Beschreibung" required rows={5} className="textarea textarea-bordered" maxLength={5000}></textarea>

            <label className="label">
              <span className="label-text">Externer Link zur Ausschreibung <span className="text-xs">(optional)</span></span>
            </label>
            <input type="text" placeholder="Anzeigenlink" className="input input-bordered" maxLength={160} />

            <label className="label">
              <span className="label-text">Kategorie</span>
            </label>
            <select className="select select-bordered" required>
              {
                categories.map((category) => (
                  <option key={category.id}>{category.name}</option>
                ))
              }
            </select>

            <label className="label">
              <span className="label-text">Beschäftigungsart <span className="text-xs">(optional)</span></span>
            </label>
            <div className="flex gap-2">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text pl-1">Vollzeit</span>
              </label>
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text pl-1">Teilzeit</span>
              </label>
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text pl-1">Freelance</span>
              </label>
            </div>

            <label className="label">
              <span className="label-text">E-Mail</span>
            </label>
            <input type="email" placeholder="E-Mail" required className="input input-bordered" maxLength={160} />

            <div className="p-4">
              <p className="text-xs text-slate-400">Die E-Mail-Adresse wird nicht veröffentlicht.</p>
              <p className="text-xs text-slate-400">Bewerbungen werden direkt an die angegebene E-Mail-Adresse gesendet.</p>
            </div>

            <button className="btn btn-primary">Anzeige erstellen</button>

            <p className="text-xs text-slate-400">Mit dem Absenden der Anzeige erklärst du dich mit unseren <a href="#" className="text-primary">Datenschutzbestimmungen</a> einverstanden.</p>

            <p className="pt-4">Die Anzeige wird veröffentlicht, sobald die Email verifiziert und die Anzeige manuell geprüft wurde.</p>
          </div>
        </form>
      </div>
    </main>
  );
}
