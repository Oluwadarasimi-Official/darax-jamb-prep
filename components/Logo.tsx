// Official brand mark: the real logo supplied by David (public/logo.png).
// Always rendered with object-fit: contain — never stretched or cropped.
export function Logo({ size = 44, withWordmark = true }: { size?: number; withWordmark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="The Official Darax Free JAMB Prep logo"
        width={size}
        height={size}
        style={{ width: size, height: size, objectFit: 'contain', borderRadius: 10, flexShrink: 0 }}
      />
      {withWordmark && (
        <span className="leading-tight">
          <span className="block font-extrabold tracking-tight text-ink text-[15px]">Official Darax</span>
          <span className="block text-[11px] tracking-[0.18em] text-accent/80 font-semibold">FREE JAMB PREP</span>
        </span>
      )}
    </span>
  );
}

export function VerifiedBadge({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-label="Official Darax verified" role="img">
      <circle cx="12" cy="12" r="11" fill="#3367c1" />
      <path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
