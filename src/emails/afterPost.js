import mailer from "../utils/mailer";

const template = (result) => `
  <h1>Vielen Dank für deine Anzeige auf Gleitschirmjobs</h1>
  Bitte bestätige deine Anzeige, indem du auf den folgenden Link klickst:
  <br><a href="https://gleitschirmjobs.de/verify/${result.uuid}">Anzeige bestätigen</a>
  <br><br>Viel Erfolg!
  <br>Dein Gleitschirmjobs-Team
  <br><br><small>Dies ist eine automatisch generierte E-Mail.</small>
  <br>Solltest du diese E-Mail nicht erwartet haben, ignoriere sie einfach. Deine E-Mail-Adresse wird nicht gespeichert.
`;

const textTemplate = (result) => `
  Danke für deine Anzeige auf Gleitschirmjobs

  Bitte bestätige deine Anzeige, indem du auf den folgenden Link klickst:
  https://gleitschirmjobs.de/verify/${result.uuid}
  Wenn du Probleme mit dem Link hast, kopiere ihn einfach in die Adresszeile deines Browsers.
  
  Viel Erfolg!
  Dein Gleitschirmjobs-Team
  Dies ist eine automatisch generierte E-Mail.
  Solltest du diese E-Mail nicht erwartet haben, ignoriere sie einfach. Deine E-Mail-Adresse wird nicht gespeichert.
`;

const afterPost = async ({ result }) => mailer.sendMail({
  from: '"Gleitschirmjobs" <kontakt@gleitschirmjobs.de>',
  to: result.email,
  subject: "Bitte bestätige deine Anzeige auf Gleitschirmjobs",
  text: textTemplate(result),
  html: template(result),
});

export default afterPost;

