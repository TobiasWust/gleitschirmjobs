// mail an admin, um neue anzeige zu veröffentlich (setzt manuell isActive auf true)

import mailer from "../utils/mailer";

const template = (result) => `
  <h1>Neue Anzeige auf Gleitschirmjobs</h1>
  <p>Es wurde eine neue Anzeige auf Gleitschirmjobs erstellt:</p>
  <hr>
  <br>categoryId: ${result.categoryId}
  <br>company: ${result.company}
  <br>companyUrl: ${result.companyUrl}
  <br>created_at: ${result.created_at}
  <br>description: ${result.description}
  <br>employmentType: ${result.employmentType}
  <br>highlight: ${result.highlight}
  <br>id: ${result.id}
  <br>isActive: ${result.isActive}
  <br>isVerified: ${result.isVerified}
  <br>jobUrl: ${result.jobUrl}
  <br>listingType: ${result.listingType}
  <br>location: ${result.location}
  <br>title: ${result.title}
  <br>uuid: ${result.uuid}
  <br>isDeleted: ${result.isDeleted}
  <hr>
  <p>Klicke hier zum veröffentlichen: <a href="https://gleitschirmjobs.de/wu-release/${result.uuid}">Anzeige bestätigen</a></p>

`;

const afterVerify = async ({ result }) => mailer.sendMail({
  from: '"Gleitschirmjobs" <kontakt@gleitschirmjobs.de>',
  to: "kontakt@tobiaswust.de",
  subject: "Neue Anzeige auf Gleitschirmjobs von " + result.company,
  html: template(result),
});

export default afterVerify;

