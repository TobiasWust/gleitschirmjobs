import Link from "next/link";
import { HiOutlineCheckBadge } from "react-icons/hi2";

export default function Sidebar() {
  return (
    <aside className="sidebar grid gap-4">
      <ul>
        <li className="font-bold flex gap-2 items-center"><HiOutlineCheckBadge className="text-success" />Kostenlos</li>
        <li className="font-bold flex gap-2 items-center"><HiOutlineCheckBadge className="text-success" />Einfach</li>
        <li className="font-bold flex gap-2 items-center"><HiOutlineCheckBadge className="text-success" />Ohne Anmeldung</li>
      </ul>
      <div className="skeleton aspect-square grid place-content-center">
        Hier könnte Ihre Werbung stehen
        <Link className="btn btn-primary btn-sm" href="/contact">Werbung schalten</Link>
      </div>
    </aside>
  )
};
