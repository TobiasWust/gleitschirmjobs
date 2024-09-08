import Link from "next/link";
import { MdParagliding } from "react-icons/md";

export default function Sellsection() {
  return (
    <div className="flex p-8 gap-8 items-center">
      <MdParagliding />
      <p>
        <span className="font-black">Gleitschirmjobs.de</span> ist die führende Plattform für Jobs im Bereich des Gleitschirmfliegens in <span className="font-bold">Deutschland und Österreich</span>. Unser Ziel ist es, Arbeitgeber und Bewerber zusammenzubringen, die ihre Leidenschaft für das Gleitschirmfliegen teilen. Egal, ob du nach einem Job als <span className="font-bold">Gleitschirmfluglehrer, Tandempilot oder in der Verwaltung</span> suchst – bei uns wirst du fündig! Unsere Plattform bietet eine benutzerfreundliche Oberfläche, die es dir leicht macht, passende Stellenangebote zu entdecken und mit potenziellen Arbeitgebern in Kontakt zu treten. Das ganze <span className="font-bold">Kostenlos und ohne Anmeldung!</span>
      </p>
      <Link href="/inserat" className="btn btn-primary ">Kostenlos inserieren</Link>
    </div>
  );
}
