import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import { Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const lato = Lato({subsets: ['latin'], weight: ['100','300','400','700','900']});

const lora = Lora({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Procademy",
  description: "Youth Basketball League",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={lora.className}>{children}</body>
    </html>
  );
}
