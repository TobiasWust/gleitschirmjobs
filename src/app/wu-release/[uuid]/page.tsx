import logger from "../../../utils/logger";
import afterRelease from "../../../emails/afterRelease";
import { createClient } from "../../../utils/supabase/server";

export default async function WuRelease({ params: { uuid } }: { params: { uuid: string } }) {

  const supabase = await createClient();

  const { data: isActiveData } = await supabase
    .from('jobs')
    .select('isActive')
    .eq('uuid', uuid)
    .single();

  if (isActiveData?.isActive) {
    return (
      <main className="py-4">
        <div className="bg-base-200 rounded-2xl p-4 grid gap-4">
          <div className="flex justify-between">
            <h1 className="card-title flex-wrap">Anzeige Veröffentlicht</h1>
          </div>
          <p>Die Anzeige wurde bereits veröffentlicht.</p>
        </div>
      </main>
    );
  }

  const { data: result, error } = await supabase
    .from('jobs')
    .update({ isActive: true })
    .eq('uuid', uuid)
    .select().single();

  if (error) {
    logger.error('Error updating job:', error);
  } else {
    logger.info('Job updated:', result);

    const mailRes = await afterRelease({ result });
    logger.info({ mailRes });
  }

  return (

    <main className="py-4">
      <div className="bg-base-200 rounded-2xl p-4 grid gap-4">
        <div className="flex justify-between">
          <h1 className="card-title flex-wrap">Anzeige Veröffentlicht</h1>
        </div>
        {error && <p className="
          text-error bg-error bg-opacity-10 border border-error border-opacity-50 p-2 rounded-md
        ">Es ist ein Fehler aufgetreten: {error.message}</p>}
        {result?.isVerified &&
          <div>
            <p>Die Anzeige wurde veröffentlicht.</p>
            <hr />
            <p>categoryId: {result.categoryId}</p>
            <p>company: {result.company}</p>
            <p>companyUrl: {result.companyUrl}</p>
            <p>created_at: {result.created_at}</p>
            <p>description: {result.description}</p>
            <p>employmentType: {result.employmentType}</p>
            <p>highlight: {result.highlight}</p>
            <p>id: {result.id}</p>
            <p>isActive: {result.isActive}</p>
            <p>isVerified: {result.isVerified}</p>
            <p>jobUrl: {result.jobUrl}</p>
            <p>listingType: {result.listingType}</p>
            <p>location: {result.location}</p>
            <p>title: {result.title}</p>
            <p>uuid: {result.uuid}</p>
            <p>isDeleted: {result.isDeleted}</p>
            <hr />
          </div>
        }
      </div>
    </main>
  );
}
