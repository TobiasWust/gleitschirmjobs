'use client';

import CategoryBar from "../components/Categorybar";
import JobTable from "../components/JobTable";

export default function Home() {
  return (
    <main>
      <CategoryBar />
      <JobTable />
      {/* {job && <JobModal job={job} />} */}
    </main>
  );
}
