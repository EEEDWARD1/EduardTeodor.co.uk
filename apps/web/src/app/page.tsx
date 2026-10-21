import type { Metadata } from "next";
import { TextLink } from "@/components/text-link";
import { projects } from "@/content/projects";
import { thoughts } from "@/content/thoughts";
import { formatDate } from "@/lib/date";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

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
          <TextLink href="https://www.citystgeorges.ac.uk/">
            City St George’s, University of London
          </TextLink>
          .
        </p>

        <p>
          I love programming and building thoughtful, client-first solutions. I
          also take on freelance projects from time to time.
        </p>

        <p>
          Lately I’ve been enjoying{" "}
          <TextLink href="https://dotnet.microsoft.com/en-us/apps/aspnet">
            ASP.NET Core
          </TextLink>
          , <TextLink href="https://nextjs.org/">Next.js</TextLink> and{" "}
          <TextLink href="https://www.python.org/">Python</TextLink>.
        </p>
      </div>

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
                <TextLink href={project.href}>{project.title}</TextLink>
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

      {thoughts.length > 0 && (
        <section aria-labelledby="thoughts-heading" className="mt-20">
          <h2
            id="thoughts-heading"
            className="border-b border-neutral-300 pb-3 text-2xl font-semibold tracking-tight text-neutral-950"
          >
            Thoughts
          </h2>

          <ul className="mt-8 space-y-4 text-lg">
            {thoughts.map((thought) => (
              <li
                key={thought.href}
                className="flex items-baseline justify-between gap-6"
              >
                <TextLink href={thought.href}>{thought.title}</TextLink>
                <time
                  dateTime={thought.publishedAt}
                  className="shrink-0 text-sm text-neutral-600 tabular-nums"
                >
                  {formatDate(thought.publishedAt)}
                </time>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
