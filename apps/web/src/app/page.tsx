import type { Metadata } from "next";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const linkClass =
  "font-medium text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-current";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eduardteodor/",
    Icon: LinkedInIcon,
  },
  { label: "GitHub", href: "https://github.com/EEEDWARD1", Icon: GitHubIcon },
] as const;

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Hi, I’m Ed.
      </h1>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-900">
        <p>
          I live in London, United Kingdom, and I am a recent First Class
          Computer Science graduate from{" "}
          <a href="https://www.citystgeorges.ac.uk/" className={linkClass}>
            City St George’s, University of London
          </a>
          .
        </p>

        <p>
          I love programming and building thoughtful, client-first solutions. I
          also take on freelance projects from time to time.
        </p>

        <p>
          Lately I’ve been enjoying{" "}
          <a
            href="https://dotnet.microsoft.com/en-us/apps/aspnet"
            className={linkClass}
          >
            ASP.NET Core
          </a>
          ,{" "}
          <a href="https://nextjs.org/" className={linkClass}>
            Next.js
          </a>{" "}
          and{" "}
          <a href="https://www.python.org/" className={linkClass}>
            Python
          </a>
          .
        </p>
      </div>
      <ul className="mt-10 flex gap-3">
        {socialLinks.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-neutral-300 text-neutral-950 transition-colors hover:border-neutral-950 hover:bg-neutral-50"
            >
              <Icon className="size-6" />
              <span className="sr-only">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
