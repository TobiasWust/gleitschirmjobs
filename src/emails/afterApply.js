// mail an user, dass email bestätigt werden muss

import mailer from "../utils/mailer";

const template = (job, formData) => `
  <p>${formData.name} hat dir eine Nachricht auf Gleitschirmjobs geschickt.</p>
  <p>Deine Anzeige: <a href="https://www.gleitschirmjobs.de/${job.id}">${job.title}</a></p>
  <ul>
    <li><strong>Name:</strong> ${formData.name}</li>
    <li><strong>Email:</strong> ${formData.email}</li>
    <li><strong>Nachricht:</strong> ${formData.message}</li>
  </ul>

  <p>Mit besten Grüßen,<br>Dein Team von Gleitschirmjobs</p>
  <br>
  <p>Diese Anzeige ist nicht mehr akutell?<br>
  <a href="https://gleitschirmjobs.de/delete/${result.uuid}">Anzeige löschen</a></p>
`;

const textTemplate = (job, formData) => `
  ${formData.name} hat dir eine Nachricht auf Gleitschirmjobs geschickt.
  Deine Anzeige: ${job.title}
  https://www.gleitschirmjobs.de/${job.id}
  
    Name: ${formData.name}
    Email: ${formData.email}
    Nachricht: ${formData.message}
  
  Mit besten Grüßen,
  Dein Team von Gleitschirmjobs

  Diese Anzeige ist nicht mehr akutell?
  Anzeige löschen: https://gleitschirmjobs.de/delete/${job.uuid}
`;

const afterApply = async ({ job, formData }) => mailer.sendMail({
  from: '"Gleitschirmjobs" <kontakt@gleitschirmjobs.de>',
  to: job.email,
  replyTo: formData.email,
  subject: `Neue Nachricht von ${formData.name} auf Gleitschirmjobs`,
  text: textTemplate(job, formData),
  html: template(job, formData),
});

export default afterApply;

