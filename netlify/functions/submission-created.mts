// using submission-created webhook from netlify forms because it will filter out spam

import { createClient } from "@supabase/supabase-js";
import pino from "pino";
import afterPost from "../../src/emails/afterPost";
import afterApply from "../../src/emails/afterApply";

const logger = pino();

const handleReq = async (req: Request) => {
  const data = await req.json();
  const formName = data.payload.form_name;

  if (!["post", "apply"].includes(formName)) {
    return
  }

  const supabase = await createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

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
          employmentType: [formData.fulltime === 'on' && 'Vollzeit', formData.parttime === 'on' && 'Teilzeit', formData.freelance === 'on' && 'Freelance'].filter(Boolean),
          isActive: false,
          isVerified: false,
          jobUrl: formData.jobUrl,
          listingType: formData.listingType,
          location: formData.location,
          title: formData.title,
          email: formData.email,
        },
      ])
      .select().single();
    logger.info(`Form name: ${formName}`);
    logger.info(`Form data: ${JSON.stringify(formData)}`);
    logger.info({ result });

    if (error) {
      logger.error({ error });
      return new Response("Error", { status: 500 });
    }

    const mailRes = await afterPost({ result });

    logger.info({ mailRes });

  }

  if (formName === 'apply') {
    const formData = data.payload.data;

    const { data: result, error } = await supabase
      .from('jobs')
      .select()
      .eq('id', formData.jobId)
      .single();
    logger.info(`Form name: ${formName}`);
    logger.info(`Form data: ${JSON.stringify(formData)}`);
    logger.info({ result });

    if (error) {
      logger.error({ error });
      return new Response("Error", { status: 500 });
    }

    const mailRes = await afterApply({ job: await result, formData });

    logger.info({ mailRes });

  }
  return new Response("OK", { status: 200 });
}


export default handleReq;
