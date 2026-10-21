export interface Project {
  title: string;
  description: string;
  href: string;
  tech: readonly string[];
}

export const projects: readonly Project[] = [
  {
    title: "eduardteodor.co.uk",
    description:
      "This site. A Next.js static export deployed to Cloudflare Workers by a GitHub Actions pipeline.",
    href: "https://github.com/EEEDWARD1/EduardTeodor.co.uk",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Cloudflare Workers",
      "GitHub Actions",
    ],
  },
];
