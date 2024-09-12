import mailer from "../utils/mailer";

const template = (result) => `
  <h1>Anzeige auf Gleitschirmjobs veröffentlicht!</h1>
  Herzlichen Glückwünsch, die Anzeige wurde erfolgreich veröffentlicht.
  <br>Die Anzeige ist nun für alle Besucher auf Gleitschirmjobs sichtbar.
  <br>Wir wünschen dir viel Erfolg bei der Suche nach dem passenden Bewerber.
  <br><br>Falls du die Anzeige löschen möchtest, kannst du dies jederzeit über den folgenden Link tun:
  <br><a href="https://gleitschirmjobs.de/delete/${result.uuid}">Anzeige löschen</a>
  <br><br>Viel Erfolg!
  <br>Dein Gleitschirmjobs-Team
`;

const textTemplate = (result) => `
  Anzeige auf Gleitschirmjobs veröffentlicht!
  
  Herzlichen Glückwünsch, die Anzeige wurde erfolgreich veröffentlicht.
  Die Anzeige ist nun für alle Besucher auf Gleitschirmjobs sichtbar.
  Wir wünschen dir viel Erfolg bei der Suche nach dem passenden Bewerber.
  
  Falls du die Anzeige löschen möchtest, kannst du dies jederzeit über den folgenden Link tun:
  https://gleitschirmjobs.de/delete/${result.uuid}
  
  Viel Erfolg!
  Dein Gleitschirmjobs-Team
`;


const afterRelease = async ({ result }) => mailer.sendMail({
  from: '"Gleitschirmjobs" <kontakt@gleitschirmjobs.de>',
  to: result.email,
  subject: "Anzeige auf Gleitschirmjobs veröffentlicht!",
  text: textTemplate(result),
  html: template(result),
});

export default afterRelease;

