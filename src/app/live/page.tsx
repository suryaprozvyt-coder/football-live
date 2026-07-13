import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import LiveBadge from "@/components/ui/LiveBadge";
import LivePlayer from "@/components/LivePlayer";
import { streamConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Live",
  description:
    "Watch the live football broadcast. Streams are live-only — no replays or archived video.",
};

export default function LivePage() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <h1 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
          Live Broadcast
        </h1>
        <LiveBadge live={streamConfig.isLive} />
      </div>

      <div className="mt-8">
        <LivePlayer />
      </div>

      <p className="mt-6 text-center text-xs text-white/40 sm:text-left">
        This is a live-only broadcast. Streams are not recorded, saved, or
        made available afterward.
      </p>
    </Container>
  );
}
