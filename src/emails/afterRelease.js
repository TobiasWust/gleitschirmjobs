// mail an user, dass anzeige veröffentlicht wurde

import { getCategoryNameById } from "@/data/categories";
import mailer from "../utils/mailer";

const template = (result) => `
  <h1>Deine Anzeige auf Gleitschirmjobs.de wurde veröffentlicht!</h1>

  <p>Herzlichen Glückwunsch! Deine Anzeige ist jetzt live und für alle Besucher von Gleitschirmjobs.de sichtbar. Wir wünschen dir viel Erfolg bei der Suche nach dem passenden Bewerber!</p>

  <p>Hier sind die Details zu deiner veröffentlichten Anzeige:</p>

  <ul>
      <li><strong>Typ:</strong> ${result.listingType}</li>
      <li><strong>Titel:</strong> ${result.title}</li>
      <li><strong>Unternehmen:</strong> ${result.company}</li>
      <li><strong>Website:</strong> <a href="${result.companyUrl}">${result.companyUrl}</a></li>
      <li><strong>Ort:</strong> ${result.location}</li>
      <li><strong>Beschreibung:</strong> ${result.description}</li>
      <li><strong>Externer Link:</strong> <a href="${result.jobUrl}">${result.jobUrl}</a></li>
      <li><strong>Kategorie:</strong> ${getCategoryNameById(result.categoryId)}</li>
      <li><strong>Beschäftigungsart:</strong> ${result.employmentType}</li>
  </ul>

  <p>Falls du die Anzeige löschen möchtest, kannst du das jederzeit über den folgenden Link tun:</p>
  <p><a href="https://gleitschirmjobs.de/delete/${result.uuid}">Anzeige löschen</a></p>

  <p>Wir freuen uns, dich auf deinem Weg zu begleiten. Viel Erfolg mit deiner Anzeige !</p>

  <p>Mit besten Grüßen,<br>Dein Team von Gleitschirmjobs</p>
`;

const textTemplate = (result) => `
  Deine Anzeige auf Gleitschirmjobs.de wurde veröffentlicht!

  Herzlichen Glückwunsch! Deine Anzeige ist jetzt live und für alle Besucher von Gleitschirmjobs.de sichtbar. Wir wünschen dir viel Erfolg bei der Suche nach dem passenden Bewerber!

  Hier sind die Details zu deiner veröffentlichten Anzeige:
      Typ: ${result.listingType}
      Titel: ${result.title}
      Unternehmen: ${result.company}
      Website: ${result.companyUrl}
      Ort: ${result.location}
      Beschreibung: ${result.description}
      Externer Link: ${result.jobUrl}
      Kategorie: ${getCategoryNameById(result.categoryId)}
      Beschäftigungsart: ${result.employmentType}
  
  Falls du die Anzeige löschen möchtest, kannst du das jederzeit über den folgenden Link tun:
  https://gleitschirmjobs.de/delete/${result.uuid}

  Wir freuen uns, dich auf deinem Weg zu begleiten. Viel Erfolg mit deiner Anzeige !
  
  Mit besten Grüßen,
  Dein Team von Gleitschirmjobs
`;


const afterRelease = async ({ result }) => mailer.send({
  from: '"Gleitschirmjobs" <kontakt@gleitschirmjobs.de>',
  to: result.email,
  subject: "Anzeige auf Gleitschirmjobs veröffentlicht!",
  text: textTemplate(result),
  html: template(result),
});

export default afterRelease;

