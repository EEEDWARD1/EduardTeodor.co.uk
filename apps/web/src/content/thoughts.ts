export interface Thought {
  title: string;
  href: string;
  publishedAt: string; // ISO date, for example "2026-10-21"
}

export const thoughts: readonly Thought[] = [
  {
    title:
      "What I Learned from Adding Behaviour Analytics to my Personal Website",
    href: "https://…",
    publishedAt: "2026-10-21",
  },
];
