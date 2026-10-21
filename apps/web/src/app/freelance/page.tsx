import type { Metadata } from "next";
import Link from "next/link";
import "./freelance.css";

export const metadata: Metadata = {
  title: "Freelance | Eduard Teodor",
  description: "Discuss a freelance programming project with Eduard Teodor.",
  alternates: {
    canonical: "/freelance/",
  },
  openGraph: {
    title: "Freelance | Eduard Teodor",
    description: "Turn your idea into a useful website or piece of software.",
    url: "https://eduardteodor.co.uk/freelance/",
    siteName: "Eduard Teodor",
    locale: "en_GB",
    type: "website",
  },
};

const services = [
  {
    symbol: "</>",
    name: "Websites",
    description:
      "A clear, responsive home for your business, portfolio, or next idea.",
    color: "blue",
  },
  {
    symbol: "{ }",
    name: "Web apps",
    description: "Useful tools built around the people who will actually use them.",
    color: "purple",
  },
  {
    symbol: ">_",
    name: "Automation",
    description:
      "Small scripts and integrations to take repetitive work off your hands.",
    color: "orange",
  },
];

const steps = [
  {
    title: "Tell me the idea",
    description: "What are you trying to solve, and who is it for? We start there.",
  },
  {
    title: "Make a plan",
    description:
      "We discuss scope, budget, and timing before committing to the work.",
  },
  {
    title: "Build it together",
    description: "Keep the feedback flowing as the idea takes shape.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="freelance-arrow"
      fill="none"
      focusable="false"
      height="20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      viewBox="0 0 24 24"
      width="20"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export default function FreelancePage() {
  return (
    <div className="freelance-page">
      <div className="freelance-container">
        <header className="freelance-header">
          <nav aria-label="Main navigation" className="freelance-nav">
            <Link className="freelance-brand" href="/">
              Eduard Teodor
            </Link>
            <a aria-current="page" className="freelance-currentLink" href="#top">
              Freelance <ArrowIcon />
            </a>
          </nav>
          <div aria-hidden="true" className="freelance-colorBar">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </header>

        <main className="freelance-main" id="top">
          <section aria-labelledby="freelance-heading" className="freelance-hero">
            <p className="freelance-eyebrow">Freelance development · London</p>
            <h1 id="freelance-heading">
              Small ideas.
              <br />
              <span>Real possibilities.</span>
            </h1>
            <p className="freelance-heroCopy">
              I&apos;m Ed. I turn ideas into useful websites and software, with
              your goals at the heart of every decision.
            </p>
            <a className="freelance-primaryButton" href="#start-project">
              Let&apos;s talk about your idea <ArrowIcon />
            </a>
          </section>

          <section aria-labelledby="services-heading" className="freelance-section">
            <div className="freelance-sectionHeading">
              <p className="freelance-kicker">What can we build?</p>
              <h2 id="services-heading">Useful, thoughtful digital work.</h2>
            </div>
            <div className="freelance-serviceGrid">
              {services.map((service, index) => (
                <article
                  className={`freelance-serviceCard freelance-${service.color}`}
                  key={service.name}
                >
                  <span aria-hidden="true" className="freelance-serviceSymbol">
                    {service.symbol}
                  </span>
                  <span className="freelance-cardIndex">
                    0{index + 1} / 0{services.length}
                  </span>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="process-heading" className="freelance-section">
            <div className="freelance-sectionHeading">
              <p className="freelance-kicker">A conversation first</p>
              <h2 id="process-heading">A clear path from idea to launch.</h2>
            </div>
            <ol className="freelance-processList">
              {steps.map((step, index) => (
                <li className="freelance-processStep" key={step.title}>
                  <span aria-hidden="true" className="freelance-stepNumber">
                    0{index + 1}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <span aria-hidden="true" className="freelance-stepArrow">
                    ↗
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section
            aria-labelledby="project-heading"
            className="freelance-projectCallout"
            id="start-project"
          >
            <p className="freelance-kicker">Start with a conversation</p>
            <h2 id="project-heading">Have something in mind?</h2>
            <p className="freelance-calloutCopy">
              A rough idea is a good place to start. Send me a little about your
              project, timeline, and budget, and we can see if we&apos;re a good
              fit.
            </p>
            <a
              className="freelance-secondaryButton"
              href="mailto:ed@eduardteodor.co.uk?subject=Freelance%20project"
            >
              Say hello <ArrowIcon />
            </a>
            <p className="freelance-availability">
              I take on freelance projects from time to time.
            </p>
            <span aria-hidden="true" className="freelance-calloutDecoration">
              01 — 03
            </span>
          </section>
        </main>

        <footer className="freelance-footer">
          <div className="freelance-footerIntro">
            <p className="freelance-kicker">Good things start with hello</p>
            <h2>Wanna get in touch?</h2>
            <p>I am always available for exciting discussions!</p>
          </div>
          <a className="freelance-footerLink" href="mailto:ed@eduardteodor.co.uk">
            <span aria-hidden="true" className="freelance-mailIcon">
              @
            </span>
            ed@eduardteodor.co.uk
            <ArrowIcon />
          </a>
          <a
            className="freelance-footerLink"
            href="https://www.google.com/maps?q=london+united+kingdom"
          >
            <span aria-hidden="true" className="freelance-mailIcon">
              ↗
            </span>
            London, United Kingdom
          </a>
          <div className="freelance-footerBottom">
            <span>© 2026 Eduard Teodor. All rights reserved.</span>
            <Link href="/privacy/">Privacy and cookies</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
