import Link from "next/link";
import { HiOutlineCheckBadge } from "react-icons/hi2";

export default function Sidebar() {
  return (
    <aside className="sidebar grid gap-4 py-4">
      <div className="flex gap-4 items-center font-bold justify-center">
        <HiOutlineCheckBadge className="text-success" />Kostenlos
        <HiOutlineCheckBadge className="text-success" />Ohne Anmeldung
      </div>
      <div className="skeleton aspect-square grid place-content-center p-4">
        Hier könnte Werbung sein
        <Link className="btn btn-primary btn-sm" href="/contact">Werbung schalten</Link>
      </div>
    </aside>
  )
};
