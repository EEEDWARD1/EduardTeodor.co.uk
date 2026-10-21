import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { CloudflareAnalytics } from "@/components/cloudflare-analytics";
import { ANALYTICS_TOKEN } from "@/lib/analytics";

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
  description: "First Class Computer Science Graduate from London",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Eduard Teodor",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={geistSans.variable}>
      <body className="">
        {children}
        <SiteFooter />
        <CloudflareAnalytics token={ANALYTICS_TOKEN} />
      </body>
    </html>
  );
}
