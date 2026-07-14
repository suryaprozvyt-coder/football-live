import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";
import Schedule from "@/components/Schedule";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(225,29,42,0.15), transparent 45%)",
          }}
          aria-hidden="true"
        />
        <Container className="relative py-24 sm:py-32">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-accent-red">
            Matchday, every time
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold uppercase leading-tight tracking-tight sm:text-6xl">
            Football, live.
            <br />
            Nothing else.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            {siteConfig.name} streams matches the moment they happen. Catch
            the whistle, catch the goals — as they happen, no delays, no
            replays.
          </p>
          <div className="mt-10">
            <Button href="/live">Watch Live</Button>
          </div>
        </Container>
      </section>

      {/* Short welcome / what to expect */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-accent-red">
                Live only
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Every stream is happening right now. When the match ends, the
                stream ends — no replays, no archive.
              </p>
            </div>
            <div>
              <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-accent-red">
                One place
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                No searching around. The Live page always shows the current
                broadcast, or lets you know when the next one starts.
              </p>
            </div>
            <div>
              <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-accent-red">
                Built for match day
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                A fast, clean player with no clutter — works just as well on
                your phone in the stands as it does at home.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
