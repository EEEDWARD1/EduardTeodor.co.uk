import Link from "next/link";
import { getProjects, getThoughts } from "@/lib/content";

export default async function Home() {
  const [projectsResult, thoughtsResult] = await Promise.all([
    getProjects(),
    getThoughts(),
  ]);

  return (
    <main className="site-shell">
      <header className="site-header grid-layout">
        <Link className="wordmark" href="/" aria-label="Eduard Teodor home">
          Eduard Teodor
        </Link>
        <p className="header-location">Developer, London</p>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#thoughts">Thoughts</a>
          <Link href="/freelance/">Freelance</Link>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero grid-layout" aria-labelledby="intro-title">
        <h1 id="intro-title">
          Hi, I&apos;m Ed<span className="accent">.</span>
        </h1>
      </section>

      <section className="intro-details grid-layout" aria-label="About me">
        <p className="section-label">Education</p>
        <p className="education-copy">
          First Class BSc Computer Science, {" "}
          <a href="https://www.citystgeorges.ac.uk/">
            City St Georges, University of London
          </a>
        </p>
        <p className="section-label currently-label">Currently</p>
        <p className="current-copy">
          ASP.NET Core, Next.js, Python. Freelance projects from time to time.
        </p>
      </section>

      <section id="work" className="content-section grid-layout">
        <h2 className="section-heading">
          <span className="section-mark accent-mark" aria-hidden="true" />
          Selected work
        </h2>
        <div className="project-list">
          {projectsResult.available ? (
            projectsResult.items.length > 0 ? (
              projectsResult.items.map((project, index) => (
                <Link
                  className="project-row"
                  href={`/projects/${encodeURIComponent(project.slug)}/`}
                  key={project.id}
                >
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="project-copy">
                    <span className="project-name">{project.title}</span>
                    <span className="project-description">
                      {project.summary}
                    </span>
                  </span>
                  <span className="project-tag">{project.tag ?? ""}</span>
                  <span className="project-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              ))
            ) : (
              <p className="content-unavailable">No selected work yet.</p>
            )
          ) : (
            <p className="content-unavailable">
              Sorry, resources are not available.
            </p>
          )}
        </div>
      </section>

      <section id="thoughts" className="content-section grid-layout">
        <h2 className="section-heading">
          <span className="section-mark" aria-hidden="true" />
          Thoughts
        </h2>
        <div className="thought-list">
          {thoughtsResult.available ? (
            thoughtsResult.items.length > 0 ? (
              thoughtsResult.items.map((thought) => (
                <Link
                  className="thought-row"
                  href={`/thoughts/${encodeURIComponent(thought.slug)}/`}
                  key={thought.id}
                >
                  <span>{thought.title}</span>
                  <span className="thought-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              ))
            ) : (
              <p className="content-unavailable">No thoughts yet.</p>
            )
          ) : (
            <p className="content-unavailable">
              Sorry, resources are not available.
            </p>
          )}
        </div>
      </section>

      <section id="contact" className="content-section grid-layout">
        <h2 className="section-heading">
          <span className="section-mark" aria-hidden="true" />
          Contact
        </h2>
        <div className="contact-content">
          <p className="contact-intro">
            I am always available for exciting discussions.
          </p>
          <a className="contact-email" href="mailto:ed@eduardteodor.co.uk">
            ed@eduardteodor.co.uk
          </a>
          <div className="social-links">
            <a href="https://github.com/EEEDWARD1">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/eduardteodor/">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer grid-layout">
        <p>© 2026 Eduard Teodor</p>
        <p>London, United Kingdom</p>
        <Link href="/privacy/">Privacy and cookies</Link>
      </footer>
    </main>
  );
}
