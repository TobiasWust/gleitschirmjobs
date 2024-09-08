export default function Header() {
  return (
    <header
      className="hero h-[30vh] bg-top bg-cover"
      style={{
        backgroundImage: "url('/headerimage.jpg')",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Gleitschirmjobs.de</h1>
          <p className="mb-5">
            Die erste Jobbörse speziell für Gleitschirmflieger.
          </p>
        </div>
      </div>
    </header>
  );
}
