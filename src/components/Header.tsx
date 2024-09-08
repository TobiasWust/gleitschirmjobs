export default function Header() {
  return (
    <header
      className="hero h-[30vh] bg-top bg-cover"
      style={{
        backgroundImage: "url('/headerimage.jpg')",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <h1 className="mb-5 [font-size:_clamp(2em,5vw,10em)] font-bold">Gleitschirmjobs.de</h1>
        <p className="mb-5">
          Die erste Jobbörse für Gleitschirmflieger.
        </p>
      </div>
    </header>
  );
}
