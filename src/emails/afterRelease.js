import mailer from "../utils/mailer";

const template = (result) => `
  <h1>Anzeige auf Gleitschirmjobs veröffentlicht!</h1>
  <br>Herzlichen Glückwünsch, die Anzeige wurde erfolgreich veröffentlicht.
  <br>Die Anzeige ist nun für alle Besucher auf Gleitschirmjobs sichtbar.
  <br>Wir wünschen dir viel Erfolg bei der Suche nach dem passenden Bewerber.
  <br><br>Falls du die Anzeige löschen möchtest, kannst du dies jederzeit über den folgenden Link tun:
  <br><a href="https://gleitschirmjobs.de/delete/${result.uuid}">Anzeige löschen</a>
  <br><br>Viel Erfolg!
  <br>Dein Gleitschirmjobs-Team
`;

const textTemplate = (result) => `
  Danke für deine Anzeige auf Gleitschirmjobs

  Bitte bestätige deine Anzeige, indem du auf den folgenden Link klickst:
  https://gleitschirmjobs.de/verify/${result.uuid}
  Wenn du Probleme mit dem Link hast, kopiere ihn einfach in die Adresszeile deines Browsers.</small>
  
  Viel Erfolg!
  Dein Gleitschirmjobs-Team
  <small>Dies ist eine automatisch generierte E-Mail.</small>
  Solltest du diese E-Mail nicht erwartet haben, ignoriere sie einfach. Deine E-Mail-Adresse wird nicht gespeichert.</p>
`;


const afterRelease = async ({ result }) => mailer.sendMail({
  from: '"Gleitschirmjobs" <kontakt@gleitschirmjobs.de>',
  to: result.email,
  subject: "Anzeige auf Gleitschirmjobs veröffentlicht!",
  text: textTemplate(result),
  html: template(result),
});

export default afterRelease;

