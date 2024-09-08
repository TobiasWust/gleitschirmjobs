import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/Footer";
import CategoryBar from "../components/Filterbar";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gleitschirmjobs - Die erste Jobbörse für Gleitschirmflieger.",
  description: "Willkommen bei Gleitschirmjobs.de – Die größte Jobbörse für Gleitschirmfliegen im deutschsprachigen Raum! Finde jetzt spannende Jobs für Gleitschirmfluglehrer, Tandempiloten und vieles mehr in Deutschland und Österreich. Wir verbinden Arbeitgeber und qualifizierte Fachkräfte im Bereich des Gleitschirmfliegens. Starte jetzt deine Karriere in der Luft!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <CategoryBar />
        <div className="md:container md:mx-auto p-4 md:p-0 grid md:grid-cols-4 gap-4">
          <div className="col-span-3">
            {children}
          </div>
          <div className="col-span-3 md:col-span-1">
            <Sidebar />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
