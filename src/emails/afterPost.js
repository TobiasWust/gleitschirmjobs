import mailer from "../utils/mailer";

const template = (result) => `
  <h1>Dank für deine Anzeige auf Gleitschirmjobs.de</h1>
  <p>Vielen Dank für deine Anzeige auf Gleitschirmjobs.de. Bitte bestätige deine Anzeige, indem du auf den folgenden Link klickst:</p>
  <a href="https://gleitschirmjobs.de/verify/${result.uuid}">Anzeige bestätigen</a>
  <p><small>Wenn du Probleme mit dem Link hast, kopiere ihn einfach in die Adresszeile deines Browsers.</small></p>
  <p>Viel Erfolg!</p>
  <p>Dein Gleitschirmjobs-Team</p>
  <p><small>Dies ist eine automatisch generierte E-Mail.</small></p>
  <p>Solltest du diese E-Mail nicht erwartet haben, ignoriere sie einfach. Deine E-Mail-Adresse wird nicht gespeichert.</p>
`;

const textTemplate = (result) => `
  Dank für deine Anzeige auf Gleitschirmjobs.de

  Vielen Dank für deine Anzeige auf Gleitschirmjobs.de. Bitte bestätige deine Anzeige, indem du auf den folgenden Link klickst:
  https://gleitschirmjobs.de/verify/${result.uuid}
  Wenn du Probleme mit dem Link hast, kopiere ihn einfach in die Adresszeile deines Browsers.</small>
  
  Viel Erfolg!
  Dein Gleitschirmjobs-Team
  <small>Dies ist eine automatisch generierte E-Mail.</small>
  Solltest du diese E-Mail nicht erwartet haben, ignoriere sie einfach. Deine E-Mail-Adresse wird nicht gespeichert.</p>
`;

const afterPost = async ({ result }) => mailer.sendMail({
  from: '"Gleitschirmjobs" <kontakt@gleitschirmjobs.de>',
  to: result.email,
  subject: "Bitte bestätige deine Anzeige auf Gleitschirmjobs.de",
  text: textTemplate(result),
  html: template(result),
});

export default afterPost;

