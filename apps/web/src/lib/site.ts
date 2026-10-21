const PRODUCTION_URL = "https://eduardteodor.co.uk";
const LOCAL_URL = "http://localhost:3000";

export const SITE_URL = (process.env.SITE_URL ?? LOCAL_URL).replace(/\/+$/, "");

export const IS_PRODUCTION_HOST = SITE_URL === PRODUCTION_URL;