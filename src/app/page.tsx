import { getActiveJobs } from '../utils/supabase/server';
import { Suspense } from "react";
// import JobTable from "../components/JobTable";
import SearchBar from "../components/Searchbar";

export default async function Home() {
  const jobs = await getActiveJobs();

  return (
    <main>
      <SearchBar />
      <Suspense>
        {JSON.stringify(jobs)}
        {/* <JobTable jobs={jobs || []} /> */}
      </Suspense>
    </main>
  );
}
