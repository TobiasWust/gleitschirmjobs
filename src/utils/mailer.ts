import sgMail from '@sendgrid/mail';

process.env.SENDGRID_API_KEY && sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default sgMail;
