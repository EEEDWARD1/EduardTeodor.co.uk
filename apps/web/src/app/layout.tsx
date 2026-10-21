import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Eduard Teodor",
    template: "%s · Eduard Teodor",
  },
  description:
    "Software developer in London. First Class Computer Science graduate building client-first solutions with ASP.NET Core, Next.js and Python.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Eduard Teodor",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={geistSans.variable}>
      <body className="bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
