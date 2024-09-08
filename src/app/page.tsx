'use client';

import JobTable from "../components/JobTable";
import SearchBar from "../components/Searchbar";

export default function Home() {
  return (
    <main>
      <SearchBar />
      <Suspense>
        <JobTable />
      </Suspense>
      {/* {job && <JobModal job={job} />} */}
    </main>
  );
}
