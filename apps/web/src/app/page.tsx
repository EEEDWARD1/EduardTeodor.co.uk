import type { Metadata } from "next";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const linkClass =
  "font-medium text-neutral-900 underline decoration-neutral-400 underline-offset-4 transition-colors hover:decoration-current";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
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
      <SocialLinks className="mt-10" />
      <section aria-labelledby="projects-heading" className="mt-20">
        <h2
          id="projects-heading"
          className="border-b border-neutral-300 pb-3 text-2xl font-semibold tracking-tight text-neutral-950"
        >
          Projects
        </h2>

        <ul className="mt-8 space-y-10">
          {projects.map((project) => (
            <li key={project.title}>
              <h3 className="text-lg font-semibold">
                <a href={project.href} className={linkClass}>
                  {project.title}
                </a>
              </h3>
              <p className="mt-2 leading-relaxed text-neutral-900">
                {project.description}
              </p>
              <ul
                aria-label="Technologies"
                className="mt-3 flex flex-wrap gap-2"
              >
                {project.tech.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-neutral-100 px-2 py-0.5 text-sm text-neutral-900"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
