import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="text-center">
        <Link href="/"><h1 className="mt-4 [font-size:_clamp(2em,4vw,10em)] leading-none">
          Gleitschirmjobs</h1></Link>
        <p className="mb-4">
          Die Jobbörse für Gleitschirmfliegende.
        </p>
      </div>
    </header>
  );
}
