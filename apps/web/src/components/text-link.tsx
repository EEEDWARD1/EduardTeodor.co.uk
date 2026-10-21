import type { ComponentProps } from "react";

const baseClass =
  "font-medium text-neutral-950 underline decoration-neutral-950 decoration-1 underline-offset-4 transition-all hover:decoration-2";

export function TextLink({ className, ...props }: ComponentProps<"a">) {
  return (
    <a
      className={className ? `${baseClass} ${className}` : baseClass}
      {...props}
    />
  );
}
