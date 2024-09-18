import nodemailer from "nodemailer";

const mailer = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});


export default mailer;

// const info = await mailer.sendMail({
//   from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
//   to: "bar@example.com, baz@example.com", // list of receivers
//   subject: "Hello ✔", // Subject line
//   text: "Hello world?", // plain text body
//   html: "<b>Hello world?</b>", // html body
// });
