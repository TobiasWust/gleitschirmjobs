import { createClient } from "../../../utils/supabase/server";

export default async function DeletePage({ params: { uuid } }: { params: { uuid: string } }) {

  const supabase = await createClient();

  const { error } = await supabase
    .from('jobs')
    .update({ isDeleted: true })
    .eq('uuid', uuid)

  return (

    <main className="py-4">
      <div className="bg-base-200 rounded-2xl p-4 grid gap-4">
        <div className="flex justify-between">
          <h1 className="card-title flex-wrap">Vielen Dank</h1>
        </div>
        {error ? <p className="
          text-error bg-error bg-opacity-10 border border-error border-opacity-50 p-2 rounded-md
        ">Es ist ein Fehler aufgetreten: {error.message}</p>
          :
          <div>
            <p>Deine Anzeige wurde erfolgreich gelöscht.</p>
          </div>
        }
      </div>
    </main>
  );
}
