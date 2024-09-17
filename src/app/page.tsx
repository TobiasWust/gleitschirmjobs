import { getActiveJobs } from '../utils/supabase/server';
import { Suspense } from "react";
import JobTable from "../components/JobTable";
import SearchBar from "../components/Searchbar";

export default async function Home() {
  const jobs = await getActiveJobs();

  if (!jobs) {
    return <div>No jobs found</div>
  }

  return (
    <main>
      <SearchBar />
      <Suspense>
        <JobTable jobs={jobs} />
      </Suspense>
    </main>
  );
}
