import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers/providers";
import NavBar from "./components/NavBar";
import NavBottom from "./components/NavBottom";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Korol",
  description: "Jason Korol's Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <NavBar />
            {children}
          <NavBottom />
        </Providers>
      </body>
    </html>
  );
}
