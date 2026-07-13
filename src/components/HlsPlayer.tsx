"use client";
 
import { useEffect, useRef } from "react";
import type Hls from "hls.js";

type HlsPlayerProps = {
  /**
   * URL of your .m3u8 stream. Use this ONLY for a stream you own or are
   * licensed to broadcast — e.g. your own OBS/streaming software output, or
   * a URL provided by a licensed CDN (Mux, Cloudflare Stream, AWS, etc.).
   */
  src: string;
};

export default function HlsPlayer({ src }: HlsPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    let hls: Hls | null = null;

    async function setup() {
      // Safari has native HLS support
      if (video!.canPlayType("application/vnd.apple.mpegurl")) {
        video!.src = src;
        return;
      }

      const HlsModule = (await import("hls.js")).default;
      if (HlsModule.isSupported()) {
        hls = new HlsModule();
        hls.loadSource(src);
        hls.attachMedia(video!);
      }
    }

    setup();

    return () => {
      hls?.destroy();
    };
  }, [src]);

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-black">
      <video
        ref={videoRef}
        controls
        autoPlay
        playsInline
        className="h-full w-full"
      >
        Your browser does not support HLS playback.
      </video>
    </div>
  );
}
