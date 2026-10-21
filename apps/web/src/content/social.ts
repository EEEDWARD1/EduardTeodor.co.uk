export type SocialIcon = "linkedin" | "github";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export const socialLinks: readonly SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eduardteodor/",
    icon: "linkedin",
  },
  { label: "GitHub", href: "https://github.com/EEEDWARD1", icon: "github" },
];
