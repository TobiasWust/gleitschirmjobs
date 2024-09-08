'use client';

import JobTable from "../components/JobTable";

export default function Home() {
  return (
    <main>
      <JobTable />
      {/* {job && <JobModal job={job} />} */}
    </main>
  );
}
