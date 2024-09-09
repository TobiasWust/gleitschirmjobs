import { createClient } from '../utils/supabase/server';
import { Suspense } from "react";
import JobTable from "../components/JobTable";
import SearchBar from "../components/Searchbar";
import { Job } from '../types/job.type';

export default async function Home() {
  const supabase = await createClient();
  const { data: jobs } = await supabase.from("jobs").select();

  return (
    <main>
      <SearchBar />
      <Suspense>
        <JobTable jobs={jobs as Job[]} />
      </Suspense>
    </main>
  );
}
