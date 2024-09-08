import Filter from "./Filter";

export default function MobileFilter({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="drawer">
      <input id="mobileNav" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {children}
      </div>
      <div className="drawer-side z-20">
        <label htmlFor="mobileNav" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu bg-base-200 text-base-content min-h-full w-1/3 p-4">
          <Filter mobileView />
        </div>
      </div>
    </div >
  );
}
