import type { ComponentType, SVGProps } from "react";
import { socialLinks, type SocialIcon } from "@/content/social";
import { GitHubIcon, LinkedInIcon } from "./icons";

const icons: Record<SocialIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={`flex gap-3 ${className ?? ""}`}>
      {socialLinks.map(({ label, href, icon }) => {
        const Icon = icons[icon];
        return (
          <li key={label}>
            <a
              href={href}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-neutral-300 text-neutral-950 transition-colors hover:border-neutral-950 hover:bg-neutral-50"
            >
              <Icon className="size-6" />
              <span className="sr-only">{label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
