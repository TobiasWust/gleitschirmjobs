import { GiHearts } from "react-icons/gi";

export default function Footer() {
  return (
    <>
      <footer className="footer justify-center bg-neutral text-neutral-content p-10 mt-4">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Inserieren</a>
          <a className="link link-hover">Werben</a>
          <a className="link link-hover">Highlight</a>
        </nav>
        <nav>
          <h6 className="footer-title">Informationen</h6>
          <a className="link link-hover">Über</a>
          <a className="link link-hover">Kontakt</a>
          <a className="link link-hover">Datenschutz</a>
          <a className="link link-hover">Impressum</a>
        </nav>
      </footer>
      <footer className="bg-neutral text-neutral-content p-4 text-center">
        <p>
          Copyright © 2024 - Made with <GiHearts className="inline-block text-wuorange" /> by <a className="link" rel="noopener noreferrer" target="_blank" href="https://www.wust.dev">Wust</a>
        </p>
      </footer>
    </>
  )
}
