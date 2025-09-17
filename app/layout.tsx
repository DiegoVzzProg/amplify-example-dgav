import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NasaLogo from "@/components/NasaLogo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amplify",
  description: "Hello Word",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full py-3 px-4 text-white bg-black inline-flex items-center gap-1">
          <span className="size-8">
            <NasaLogo />
          </span>
          <span className="flex gap-1 items-end text-xl">
            <span className="font-extralight">
              EARHDATA
            </span>
            <span className="font-semibold text-xs">
              By LOCOS DE LA NASA
            </span>
          </span>
        </header>
        <main className="flex flex-col overflow-y-auto overflow-x-hidden items-center px-4 w-full h-screen">
          <section className="w-full max-w-3xl">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
