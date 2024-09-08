import { HiMagnifyingGlass } from "react-icons/hi2";
import { useSearchFilter } from "../store/useSearchFilter";

export default function SearchBar() {
  const setSearchText = useSearchFilter((state) => state.setSearchText);

  return (
    <label className="input input-bordered flex items-center gap-2 my-4">
      <input type="text" className="grow" placeholder="Volltextsuche" onChange={e => setSearchText(e.target.value)} />
      <HiMagnifyingGlass />
    </label>
  )
}
