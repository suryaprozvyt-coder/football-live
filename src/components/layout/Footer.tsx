import Logo from "@/components/Logo";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

const socialLinks = [
  { href: siteConfig.social.youtube, label: "YouTube" },
  { href: siteConfig.social.instagram, label: "Instagram" },
  { href: siteConfig.social.x, label: "X" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-base-black">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <Logo />

        <nav aria-label="Social links">
          <ul className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xs font-medium uppercase tracking-widest text-white/60 transition-colors hover:text-accent-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-white/40">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
