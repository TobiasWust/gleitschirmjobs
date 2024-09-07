'use client';

import CategoryBar from "../components/Categorybar";
import JobModal from "../components/JobModal";
import JobTable from "../components/JobTable";
import jobs from "../data/jobs";
import { useJobModal } from "../store/useJobModal";

export default function Home() {
  const jobId = useJobModal((state) => state.jobId);
  const job = jobs.find(j => j.id === jobId);

  return (
    <main className="md:container md:mx-auto">
      <h1>Gleitschirm Jobbörse</h1>
      <CategoryBar />
      <JobTable />
      {job && <JobModal job={job} />}
    </main>
  );
}
