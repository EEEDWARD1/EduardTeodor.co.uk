import { describe, expect, it } from "vitest";
import { PRODUCTION_URL, resolveSiteConfig } from "./site";

describe("resolveSiteConfig", () => {
  it("falls back to localhost when SITE_URL is missing", () => {
    expect(resolveSiteConfig(undefined)).toEqual({
      url: "http://localhost:3000",
      isProductionHost: false,
    });
  });

  it("treats an empty SITE_URL as missing", () => {
    expect(resolveSiteConfig("  ").url).toBe("http://localhost:3000");
  });

  it("does not treat the dev host as production", () => {
    expect(resolveSiteConfig("https://dev.eduardteodor.co.uk")).toEqual({
      url: "https://dev.eduardteodor.co.uk",
      isProductionHost: false,
    });
  });

  it("treats the apex as production", () => {
    expect(resolveSiteConfig(PRODUCTION_URL).isProductionHost).toBe(true);
  });

  it("removes trailing slashes before the comparison", () => {
    expect(resolveSiteConfig("https://eduardteodor.co.uk//")).toEqual({
      url: PRODUCTION_URL,
      isProductionHost: true,
    });
  });

  it("does not treat the http apex as production", () => {
    expect(
      resolveSiteConfig("http://eduardteodor.co.uk").isProductionHost,
    ).toBe(false);
  });
});
