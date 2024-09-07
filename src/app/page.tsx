import CategoryBar from "./components/Categorybar";
import JobTable from "./components/JobTable";

export default function Home() {
  return (
    <main className="md:container md:mx-auto">
      <h1>Welcome to your new Next.js site!</h1>
      <CategoryBar />
      <JobTable />
    </main>
  );
}
