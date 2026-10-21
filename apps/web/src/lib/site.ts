export const PRODUCTION_URL = "https://eduardteodor.co.uk";
const LOCAL_URL = "http://localhost:3000";

export interface SiteConfig {
  url: string;
  isProductionHost: boolean;
}

export function resolveSiteConfig(rawUrl: string | undefined): SiteConfig {
  const url = (rawUrl?.trim() || LOCAL_URL).replace(/\/+$/, "");
  return { url, isProductionHost: url === PRODUCTION_URL };
}

const site = resolveSiteConfig(process.env.SITE_URL);

export const SITE_URL = site.url;
export const IS_PRODUCTION_HOST = site.isProductionHost;
