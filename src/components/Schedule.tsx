import Container from "@/components/ui/Container";
import { scheduleConfig } from "@/lib/config";

const statusStyles = {
  upcoming: "border-white/15 text-white/60",
  live: "border-accent-red bg-accent-red/10 text-accent-red",
  finished: "border-white/10 text-white/30",
};

const statusLabels = {
  upcoming: "Upcoming",
  live: "Live",
  finished: "Finished",
};

function formatDate(dateStr: string) {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export default function Schedule() {
  if (scheduleConfig.length === 0) return null;

  return (
    <section className="border-t border-white/10 py-16 sm:py-20">
      <Container>
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
          Upcoming Matches
        </h2>

        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {scheduleConfig.map((match) => (
            <div
              key={match.id}
              className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/40">
                  {match.competition}
                </span>
                <span className="font-display text-base font-semibold uppercase tracking-wide">
                  {match.homeTeam}{" "}
                  <span className="text-white/40">vs</span> {match.awayTeam}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-white/50">
                  {formatDate(match.date)} · {match.time}
                </span>
                <span
                  className={`rounded-sm border px-2.5 py-1 font-display text-xs font-semibold uppercase tracking-widest ${statusStyles[match.status]}`}
                >
                  {statusLabels[match.status]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
