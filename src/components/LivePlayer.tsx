"use client";

import { streamConfig } from "@/lib/config";
import HlsPlayer from "@/components/HlsPlayer";

export default function LivePlayer() {
  const { streamType, youtubeVideoId, hlsUrl, isLive } = streamConfig;

  const hasSource =
    streamType === "youtube" ? Boolean(youtubeVideoId) : Boolean(hlsUrl);

  if (!isLive || !hasSource) {
    return (
      <div
        className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-lg border border-white/10 bg-base-gray px-6 text-center"
        role="status"
      >
        <span className="h-3 w-3 rounded-full bg-white/20" aria-hidden="true" />
        <p className="font-display text-base font-semibold uppercase tracking-wide text-white/80">
          The stream is currently offline.
        </p>
        <p className="max-w-sm text-sm text-white/50">
          Please check back later.
        </p>
      </div>
    );
  }

  if (streamType === "hls") {
    return <HlsPlayer src={hlsUrl} />;
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-black">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&rel=0`}
        title="Live football broadcast"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
