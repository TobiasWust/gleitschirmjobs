import mailer from "../utils/mailer";

const template = (result) => `
  <h1>Neue Anzeige auf Gleitschirmjobs</h1>
  <p>Es wurde eine neue Anzeige auf Gleitschirmjobs erstellt:</p>
  <hr>
  <p>categoryId: ${result.categoryId}</p>
  <p>company: ${result.company}</p>
  <p>companyUrl: ${result.companyUrl}</p>
  <p>created_at: ${result.created_at}</p>
  <p>description: ${result.description}</p>
  <p>employmentType: ${result.employmentType}</p>
  <p>highlight: ${result.highlight}</p>
  <p>id: ${result.id}</p>
  <p>isActive: ${result.isActive}</p>
  <p>isVerified: ${result.isVerified}</p>
  <p>jobUrl: ${result.jobUrl}</p>
  <p>listingType: ${result.listingType}</p>
  <p>location: ${result.location}</p>
  <p>title: ${result.title}</p>
  <p>uuid: ${result.uuid}</p>
  <p>isDeleted: ${result.isDeleted}</p>
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

