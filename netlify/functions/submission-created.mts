import { createClient } from "@supabase/supabase-js";
import pino from "pino";

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
          employmentType: [formData.fulltime === 'on' && 'fulltime', formData.parttime === 'on' && 'parttime', formData.freelance === 'on' && 'freelance'].filter(Boolean),
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

  }
  return
}


export default handleReq;
