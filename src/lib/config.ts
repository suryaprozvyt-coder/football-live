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
