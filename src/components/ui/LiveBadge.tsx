type LiveBadgeProps = {
  live: boolean;
};

export default function LiveBadge({ live }: LiveBadgeProps) {
  if (!live) {
    return (
      <span className="inline-flex items-center gap-2 rounded-sm border border-white/15 px-3 py-1 font-display text-xs font-semibold uppercase tracking-widest text-white/50">
        <span className="h-2 w-2 rounded-full bg-white/30" aria-hidden="true" />
        Offline
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-2 rounded-sm bg-accent-red px-3 py-1 font-display text-xs font-semibold uppercase tracking-widest text-white"
      role="status"
    >
      <span
        className="h-2 w-2 rounded-full bg-white animate-live-pulse"
        aria-hidden="true"
      />
      Live
    </span>
  );
}
