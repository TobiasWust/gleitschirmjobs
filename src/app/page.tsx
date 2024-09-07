'use client';

import CategoryBar from "../components/Categorybar";
import Footer from "../components/Footer";
import JobModal from "../components/JobModal";
import JobTable from "../components/JobTable";
import jobs from "../data/jobs";
import { useJobModal } from "../store/useJobModal";

export default function Home() {
  const jobId = useJobModal((state) => state.jobId);
  const job = jobs.find(j => j.id === jobId);

  return (
    <main>
      <h1>Gleitschirm Jobbörse</h1>
      <div className="md:container md:mx-auto">
        <CategoryBar />
        <JobTable />
      </div>
      {job && <JobModal job={job} />}
      <Footer />
    </main>
  );
}
