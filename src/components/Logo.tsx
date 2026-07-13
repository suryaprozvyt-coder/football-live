import { siteConfig } from "@/lib/config";

export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wide text-white">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" stroke="#E11D2A" strokeWidth="2" />
        <path
          d="M12 7L15.5 9.5L14.2 13.5H9.8L8.5 9.5L12 7Z"
          stroke="#E11D2A"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M12 3.5V7M4.5 9.5L8.5 9.5M19.5 9.5L15.5 9.5M7 20L9.8 13.5M17 20L14.2 13.5" stroke="#E11D2A" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      {siteConfig.name}
    </span>
  );
}
