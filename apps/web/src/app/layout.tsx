import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eduard Teodor — London",
  description:
    "I'm Ed, a London-based developer building thoughtful client-first solutions with .NET, Next.js, and Python.",
  metadataBase: new URL("https://eduardteodor.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Eduard Teodor — London",
    description:
      "Thoughtful client-first solutions, selected work, and notes from a developer in London.",
    url: "https://eduardteodor.co.uk/",
    siteName: "Eduard Teodor",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
