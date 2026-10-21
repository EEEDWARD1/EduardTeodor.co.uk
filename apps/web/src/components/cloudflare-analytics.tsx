import Script from "next/script";

export function CloudflareAnalytics({ token }: { token: string | undefined }) {
  if (!token) return null;

  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      type="module"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
