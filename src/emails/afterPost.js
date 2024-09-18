// mail an user, dass email bestätigt werden muss

import { getCategoryNameById } from "@/data/categories";
import mailer from "../utils/mailer";

const template = (result) => `
  <h1>Vielen Dank für deine Anzeige auf Gleitschirmjobs!</h1>
  <p>Es wurde eine neue Anzeige auf Gleitschirmjobs erstellt:</p>
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
  <p>Um deine Anzeige zu veröffentlichen, bestätige sie bitte, indem du auf den folgenden Link klickst:
  <br><a href="https://gleitschirmjobs.de/verify/${result.uuid}">Anzeige bestätigen</a>
  </p>
  <p>Mit besten Grüßen,<br>Dein Team von Gleitschirmjobs</p>
  <p><small>Dies ist eine automatisch generierte E-Mail. Solltest du diese E-Mail nicht erwartet haben, ignoriere sie einfach. Deine E-Mail-Adresse wird nicht gespeichert.</small></p>
`;

const textTemplate = (result) => `
  Vielen Dank für deine Anzeige auf Gleitschirmjobs!

  Es wurde eine neue Anzeige auf Gleitschirmjobs erstellt:
    Typ: ${result.listingType}
    Titel: ${result.title}
    Unternehmen: ${result.company}
    Website: ${result.companyUrl}
    Ort: ${result.location}
    Beschreibung: ${result.description}
    Externer Link: ${result.jobUrl}
    Kategorie: ${getCategoryNameById(result.categoryId)}
    Beschäftigungsart: ${result.employmentType}
  
  Um deine Anzeige zu veröffentlichen, bestätige sie bitte, indem du auf den folgenden Link klickst:
  https://gleitschirmjobs.de/verify/${result.uuid}
  
  Mit besten Grüßen,
  Dein Team von Gleitschirmjobs

  Dies ist eine automatisch generierte E-Mail. Solltest du diese E-Mail nicht erwartet haben, ignoriere sie einfach. Deine E-Mail-Adresse wird nicht gespeichert.
`;

const afterPost = async ({ result }) => mailer.sendMail({
  from: '"Gleitschirmjobs" <kontakt@gleitschirmjobs.de>',
  to: result.email,
  subject: "Bitte bestätige deine Anzeige auf Gleitschirmjobs",
  text: textTemplate(result),
  html: template(result),
});

export default afterPost;

