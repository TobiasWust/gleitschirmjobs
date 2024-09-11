import { createClient } from '../utils/supabase/server';
import { Suspense } from "react";
import JobTable from "../components/JobTable";
import SearchBar from "../components/Searchbar";

export default async function Home() {
  const supabase = await createClient();
  const { data: jobs } = await supabase.from("jobs")
    .select('categoryId, company, companyUrl, created_at, description, employmentType, highlight, id, jobUrl, listingType, location, title')
    .eq('isVerified', true)
    .eq('isDeleted', false)
    .eq('isActive', true)
    .order('id', { ascending: false });

  return (
    <main>
      <SearchBar />
      <Suspense>
        <JobTable jobs={jobs || []} />
      </Suspense>
    </main>
  );
}
