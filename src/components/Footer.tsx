'use client';
import Link from "next/link";
import { useEffect } from "react";
import { GiHearts } from "react-icons/gi";
import { HiMiniMoon, HiMiniSun } from "react-icons/hi2";
import themeStore from "../store/themeStore";

export default function Footer() {
  const theme = themeStore((state) => state.theme);
  const setTheme = themeStore((state) => state.setTheme);

  const handleThemeChange = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    setTheme(e.currentTarget.classList.contains('swap-on') ? 'myDark' : 'myLight');
  }

  useEffect(() => {
    document.querySelector('html')?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <footer className="footer justify-center bg-neutral text-neutral-content p-10 mt-4">
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link href="/post" className="link link-hover">Inserieren</Link>
          <Link href="/contact" className="link link-hover">Werben</Link>
          <Link href="/contact" className="link link-hover">Highlight</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Informationen</h6>
          {/* <a className="link link-hover">Über</a> */}
          <Link href="/contact" className="link link-hover">Kontakt</Link>
          <Link href="/privacy" className="link link-hover">Datenschutz</Link>
          <Link href="/imprint" className="link link-hover">Impressum</Link>
        </nav>
      </footer>
      <footer className="bg-neutral text-neutral-content p-4 text-center">
        <p>
          <button className="btn btn-square btn-ghost">
            <label className="swap swap-rotate w-12 h-12">
              <input type="checkbox"
                className="swap-checkbox"
                defaultChecked={theme === 'myDark'}
              />
              <HiMiniSun onClick={handleThemeChange} className="w-8 h-8 swap-on" />
              <HiMiniMoon onClick={handleThemeChange} className="w-8 h-8 swap-off" />
            </label>
          </button>
        </p>
        <p>
          Copyright © 2024 - Made with <GiHearts className="inline-block text-wuorange" /> by <a className="link" rel="noopener noreferrer" target="_blank" href="https://www.wust.dev">Wust</a>
        </p>
      </footer>
    </>
  )
}
