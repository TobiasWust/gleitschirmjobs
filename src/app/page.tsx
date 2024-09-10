import { createClient } from '../utils/supabase/server';
import { Suspense } from "react";
import JobTable from "../components/JobTable";
import SearchBar from "../components/Searchbar";

export default async function Home() {
  const supabase = await createClient();
  // todo dont select all fields, dont select inactive jobs
  const { data: jobs } = await supabase.from("jobs").select();

  return (
    <main>
      <SearchBar />
      <Suspense>
        <JobTable jobs={jobs || []} />
      </Suspense>
    </main>
  );
}
