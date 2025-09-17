import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Amplify",
    description: "Hello Word",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex flex-col overflow-y-auto overflow-x-hidden w-full h-screen">{children}</main>
            </body>
        </html>
    );
}
