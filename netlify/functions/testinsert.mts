import { createClient } from "@supabase/supabase-js";
import pino from "pino";

const logger = pino();

const handleReq = async () => {
  const supabase = await createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const { data: result, error } = await supabase
    .from('jobs')
    .insert([
      {
        categoryId: 2,
        company: 'Peter Parker',
        companyUrl: 'peterparker@dc.de',
        description: 'ich will das hier testen',
        employmentType: ['vollzeit'],
        isActive: false,
        isVerified: false,
        jobUrl: 'wust.dev',
        listingType: 'offer',
        location: 'egal',
        title: 'neue Anzeige',
        email: 'kontakt@tobiaswust.de'
      },
    ])
    .select()
  logger.info(result);
  logger.error(error);

  return
}


export default handleReq;
