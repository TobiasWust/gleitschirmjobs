// mail an user, dass email bestätigt werden muss

import mailer from "../utils/mailer";

const template = (result) => `
  <p>${result.name} hat dir eine Nachricht auf Gleitschirmjobs geschickt:</p>
  <ul>
    <li><strong>Name:</strong> ${result.name}</li>
    <li><strong>Email:</strong> ${result.email}</li>
    <li><strong>Nachricht:</strong> ${result.message}</li>
  </ul>

  <p>Mit besten Grüßen,<br>Dein Team von Gleitschirmjobs</p>
`;

const textTemplate = (result) => `
  ${result.name} hat dir eine Nachricht auf Gleitschirmjobs geschickt:
  
    <strong>Name:</strong> ${result.name}
    <strong>Email:</strong> ${result.email}
    <strong>Nachricht:</strong> ${result.message}
  
  Mit besten Grüßen,<br>Dein Team von Gleitschirmjobs
`;

const afterApply = async ({ result }) => mailer.sendMail({
  from: '"Gleitschirmjobs" <kontakt@gleitschirmjobs.de>',
  to: result.email,
  replyTo: result.email,
  subject: `Neue Nachricht von ${result.name} auf Gleitschirmjobs`,
  text: textTemplate(result),
  html: template(result),
});

export default afterApply;

