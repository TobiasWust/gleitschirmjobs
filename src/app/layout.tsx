import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Footer from "../components/Footer";
import Filterbar from "../components/Filterbar";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MobileFilter from "../components/MobileFilter";

export const metadata: Metadata = {
  title: "Gleitschirmjobs - Die Jobbörse für Gleitschirmfliegende.",
  description: "Die Jobbörse für Gleitschirmfliegende im deutschsprachigen Raum! Finde spannende Jobs in Deutschland und Österreich. Wir verbinden Arbeitgebende und qualifizierte Fachkräfte im Bereich des Gleitschirmfliegens. Starte jetzt deine Karriere in der Luft!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className="antialiased"
      >
        <MobileFilter>
          <Header />
          <Filterbar />
          <div className="max-w-screen-xl lg:mx-auto p-4 xl:p-0 grid lg:grid-cols-4 gap-4">
            <div className="col-span-3">
              {children}
            </div>
            <div className="col-span-3 lg:col-span-1">
              <Sidebar />
            </div>
          </div>
          <Footer />
        </MobileFilter>
      </body>
      <GoogleAnalytics gaId="G-E1TYV6R9DM" />
    </html>
  );
}
