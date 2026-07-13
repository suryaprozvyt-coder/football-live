import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} and why it exists.`,
};

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        About
      </h1>
      <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-white/70">
        <p>
          {siteConfig.name} is a one-person project built around a simple
          idea: football is best watched live, as it happens. I stream
          matches directly from the pitch so friends, family, and anyone else
          who wants to tune in can follow along in real time — no delays, no
          replays, no clutter. This site exists purely to point you to the
          broadcast when it&apos;s live and get out of your way otherwise.
        </p>
      </div>
    </Container>
  );
}
