/**
 * Central site configuration.
 *
 * To go live with your own stream, change YOUTUBE_VIDEO_ID below.
 * See README.md for full instructions on finding your video ID.
 */

export const siteConfig = {
  name: "PitchSide",
  tagline: "Live football, straight from the pitch.",
  description:
    "Watch live football streams on PitchSide. No replays, no archives — just the live match, straight from the source.",
  url: "https://example.com",
  contactEmail: "contact@example.com",
  social: {
    youtube: "https://youtube.com/@yourchannel",
    instagram: "https://instagram.com/yourhandle",
    x: "https://x.com/yourhandle",
  },
};

export const streamConfig = {
  /**
   * Which player to use on the Live page: "youtube" or "hls".
   */
  streamType: "youtube" as "youtube" | "hls",

  /**
   * The ID of your YouTube LIVE video (not the channel ID).
   * Example: for https://www.youtube.com/watch?v=dQw4w9WgXcQ the ID is "dQw4w9WgXcQ"
   * Only used when streamType is "youtube".
   */
  youtubeVideoId: "_8ll2o5aPhA",

  /**
   * URL of your .m3u8 HLS stream. Only used when streamType is "hls".
   * Use this ONLY for a stream you own or are licensed to broadcast.
   */
  hlsUrl: "",

  /**
   * Manual override: set to false to force the "offline" state on the Live
   * page even if a video ID / HLS URL is present (useful before/after a broadcast).
   */
  isLive: true,

  /**
   * Password required to view the Live page. Change this to whatever you
   * want. Leave as an empty string ("") to turn password protection off.
   */
  livePassword: "changeme",
};

/**
 * Manually managed match schedule shown on the Home page.
 * Add, remove, or edit entries here — just follow the same format.
 *
 * "kickoff" is the match start time written as IST (India time), using
 * this exact format: "YYYY-MM-DDTHH:MM:00+05:30"
 * Example: 6:00 PM IST on 20 July 2026 → "2026-07-20T18:00:00+05:30"
 *
 * The website automatically converts this to each visitor's own local
 * time when displaying it — you only ever need to enter IST here.
 *
 * "status" controls the small tag shown next to the match:
 *   "upcoming" | "live" | "finished"
 */
export const scheduleConfig = [
  {
    id: "match-1",
    competition: "Friendly",
    homeTeam: "Team A",
    awayTeam: "Team B",
    kickoff: "2026-07-20T18:00:00+05:30",
    status: "upcoming" as "upcoming" | "live" | "finished",
  },
  {
    id: "match-2",
    competition: "Friendly",
    homeTeam: "Team C",
    awayTeam: "Team D",
    kickoff: "2026-07-27T19:30:00+05:30",
    status: "upcoming" as "upcoming" | "live" | "finished",
  },
];

/**
 * The single highlighted match shown at the very top of the Home page,
 * with its own "Watch Live" button. This button links straight to
 * "watchUrl" (opens in a new tab) — it does NOT use the Live page's
 * streamConfig above, so it can point to a totally different stream.
 *
 * "kickoff" uses the same IST format as scheduleConfig above.
 *
 * Set to `null` to hide this section entirely.
 */
export const featuredMatchConfig = {
  competition: "Featured",
  homeTeam: "Team A",
  awayTeam: "Team B",
  kickoff: "2026-07-20T18:00:00+05:30",
  isLive: true,
  /**
   * Where the "Watch Live" button sends people. Can be a YouTube link,
   * or any other stream page URL.
   */
  watchUrl: "https://www.youtube.com/watch?v=_8ll2o5aPhA",
};

/**
 * Formats a "kickoff" ISO string (entered in IST) into the visitor's own
 * local time and timezone. Used by both Schedule.tsx and FeaturedMatch.tsx.
 */
export function formatKickoff(kickoff: string) {
  const date = new Date(kickoff);
  const datePart = date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const timePart = date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
  const tzName =
    new Intl.DateTimeFormat(undefined, { timeZoneName: "short" })
      .formatToParts(date)
      .find((part) => part.type === "timeZoneName")?.value ?? "";

  return `${datePart} · ${timePart} ${tzName}`;
}
