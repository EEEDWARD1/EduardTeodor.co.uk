import type { Metadata } from "next";
import { TextLink } from "@/components/text-link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-8 text-lg leading-relaxed text-neutral-900">
        This page does not exist, or it has moved.{" "}
        <TextLink href="/">Go to the home page</TextLink>.
      </p>
    </main>
  );
}
