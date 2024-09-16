import logger from "../../../utils/logger";
import afterVerify from "../../../emails/afterVerify";
import { createClient } from "../../../utils/supabase/server";

export default async function VerifyPage({ params: { uuid } }: { params: { uuid: string } }) {

  const supabase = await createClient();

  const { data: isVerified } = await supabase
    .from('jobs')
    .select('isVerified')
    .eq('uuid', uuid)
    .single();

  if (isVerified) {
    return (
      <main className="py-4">
        <div className="bg-base-200 rounded-2xl p-4 grid gap-4">
          <div className="flex justify-between">
            <h1 className="card-title flex-wrap">Vielen Dank</h1>
          </div>
          <p>Deine Emailadresse wurde bereits bestätigt.</p>
          <p>Als nächstes werden wir deine Anzeige prüfen und dich informieren, sobald sie online ist.</p>
        </div>
      </main>
    );
  }

  const { data: result, error } = await supabase
    .from('jobs')
    .update({ isVerified: true })
    .eq('uuid', uuid)
    .select().single();

  if (error) {
    logger.error('Error updating job:', error);
  } else {
    logger.info('Job updated:', result);

    const mailRes = await afterVerify({ result });
    logger.info({ mailRes });
  }

  return (

    <main className="py-4">
      <div className="bg-base-200 rounded-2xl p-4 grid gap-4">
        <div className="flex justify-between">
          <h1 className="card-title flex-wrap">Vielen Dank</h1>
        </div>
        {error && <p className="
          text-error bg-error bg-opacity-10 border border-error border-opacity-50 p-2 rounded-md
        ">Es ist ein Fehler aufgetreten: {error.message}</p>}
        {result?.isVerified &&
          <div>
            <p>Deine Emailadresse wurde erfolgreich bestätigt.</p>
            <p>Als nächstes werden wir deine Anzeige prüfen und dich informieren, sobald sie online ist.</p>
          </div>
        }
      </div>
    </main>
  );
}
