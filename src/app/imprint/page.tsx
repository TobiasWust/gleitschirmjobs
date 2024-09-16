import Link from "next/link";

export default function Imprint() {
  return (
    <main className="py-4">
      <div className="bg-base-200 rounded-2xl p-4 grid gap-4">
        <div className="flex justify-between">
          <h1 className="card-title flex-wrap">Impressum</h1>
        </div>
        <p>§ 5 TMG</p>

        <p>Tobias Wust<br />
          Vor den Kämpen 20<br />
          30851 Langenhagen</p>

        <p>
          <b>Kontakt: </b> <Link className="link" href="/contact">Bitte nutzen Sie das Kontaktformular.</Link> <br />
          <b>Mail:</b> Webmaster (at) tobiaswust.de<br />
          <b>USt-IdNr.:</b> DE317980584
        </p>
      </div>
    </main>
  )
}
