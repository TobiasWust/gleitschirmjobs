// mail an user mit Bewerbungsnachticht

import mailer from "../utils/mailer";

const template = (job, formData) => `
  <p>Du hast eine Nachricht an ${job.company} auf Gleitschirmjobs geschickt.</p>
  <p>Anzeige: <a href="https://www.gleitschirmjobs.de/${job.id}">${job.title}</a></p>
  <ul>
    <li><strong>Name:</strong> ${formData.name}</li>
    <li><strong>Email:</strong> ${formData.email}</li>
    <li><strong>Nachricht:</strong> ${formData.message}</li>
  </ul>

  <p>Deine Nachricht wurde direkt an ${job.company} gesendet.</p>
  <p>Mit besten Grüßen,<br>Dein Team von Gleitschirmjobs</p>
`;

const textTemplate = (job, formData) => `
  Du hast eine Nachricht an ${job.company} auf Gleitschirmjobs geschickt.
  Anzeige: ${job.title}
  https://www.gleitschirmjobs.de/${job.id}

    Name: ${formData.name}
    Email: ${formData.email}
    Nachricht: ${formData.message}

  Deine Nachricht wurde direkt an ${job.company} gesendet.

  Mit besten Grüßen,
  Dein Team von Gleitschirmjobs
`;

const afterApplySender = async ({ job, formData }) => mailer.sendMail({
  from: '"Gleitschirmjobs" <kontakt@gleitschirmjobs.de>',
  to: formData.email,
  subject: `Deine Nachricht an ${job.company} auf Gleitschirmjobs`,
  text: textTemplate(job, formData),
  html: template(job, formData),
});

export default afterApplySender;

