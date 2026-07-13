import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-20">
      <h1 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Contact
      </h1>
      <p className="mt-4 max-w-lg text-base text-white/70">
        Questions, feedback, or a stream that didn&apos;t load right? Send a
        message below.
      </p>
      <div className="mt-10 max-w-lg">
        <ContactForm />
      </div>
    </Container>
  );
}
