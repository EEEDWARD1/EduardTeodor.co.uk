import { SocialLinks } from "./social-links";
import { TextLink } from "./text-link";

const CONTACT_EMAIL = "ed@eduardteodor.co.uk";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-auto w-full max-w-2xl px-6 pt-20 pb-16">
      <h2 className="border-b border-neutral-300 pb-3 text-2xl font-semibold tracking-tight text-neutral-950">
        Contact
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-neutral-900">
        The best way to reach me is by email at{" "}
        <TextLink href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</TextLink>.
      </p>
      <SocialLinks className="mt-6" />
      <p className="mt-12 text-sm text-neutral-600">© {year} Eduard Teodor</p>
    </footer>
  );
}
