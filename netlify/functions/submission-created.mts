import { createClient } from "@supabase/supabase-js";
import pino from "pino";
import nodemailer from "nodemailer";

const logger = pino();

const handleReq = async (req: Request) => {
  const data = await req.json();
  const formName = data.payload.form_name;

  if (formName !== "post") {
    return
  }

  const supabase = await createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const mailer = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  if (formName === 'post') {
    const formData = data.payload.data;

    const { data: result, error } = await supabase
      .from('jobs')
      .insert([
        {
          categoryId: formData.categoryId,
          company: formData.company,
          companyUrl: formData.companyUrl,
          description: formData.description,
          employmentType: [formData.fulltime === 'on' && 'Fulltime', formData.parttime === 'on' && 'Parttime', formData.freelance === 'on' && 'Freelance'].filter(Boolean),
          isActive: false,
          isVerified: false,
          jobUrl: formData.jobUrl,
          listingType: formData.listingType,
          location: formData.location,
          title: formData.title,
          email: formData.email,
        },
      ])
      .select()
    logger.info(`Form name: ${formName}`);
    logger.info(`Form data: ${JSON.stringify(formData)}`);
    logger.info(result);
    logger.error(error);

    const mailRes = mailer.sendMail({
      from: '"Gleitschirmjobs" <kontakt@gleitschirmjobs.de>',
      to: formData.email,
      subject: "Bitte bestätige deine Anzeige auf Gleitschirmjobs.de",
      text: JSON.stringify(result),
      html: JSON.stringify(result),
    });

    logger.info(mailRes);

  }
  return
}


export default handleReq;
