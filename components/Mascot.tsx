// "Dara" — the Official Darax study mascot.
// Hand-built SVG (no raster asset) so it stays crisp at any size, inherits the
// JAMB palette exactly, and ships zero extra network requests.
export function Mascot({
  size = 120,
  className = '',
  wave = false,
  title = 'Dara, the Darax study mascot',
}: {
  size?: number;
  className?: string;
  wave?: boolean;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size * (140 / 120)}
      viewBox="0 0 120 140"
      role="img"
      aria-label={title}
      className={className}
    >
      <defs>
        <linearGradient id="dara-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2AA84C" />
          <stop offset="100%" stopColor="#1D943B" />
        </linearGradient>
        <linearGradient id="dara-belly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2FAF4" />
          <stop offset="100%" stopColor="#DCEFE2" />
        </linearGradient>
      </defs>

      {/* soft ground shadow */}
      <ellipse cx="60" cy="132" rx="34" ry="5.5" fill="#006633" opacity=".10" />

      {/* legs */}
      <rect x="42" y="108" width="13" height="16" rx="6.5" fill="#00552A" />
      <rect x="65" y="108" width="13" height="16" rx="6.5" fill="#00552A" />
      <ellipse cx="48.5" cy="124" rx="9.5" ry="4.5" fill="#003D1E" />
      <ellipse cx="71.5" cy="124" rx="9.5" ry="4.5" fill="#003D1E" />

      {/* left arm (resting) */}
      <rect x="20" y="70" width="11" height="30" rx="5.5" fill="#1D943B" transform="rotate(12 25 85)" />

      {/* body */}
      <rect x="26" y="40" width="68" height="74" rx="30" fill="url(#dara-body)" />
      {/* belly */}
      <ellipse cx="60" cy="88" rx="24" ry="21" fill="url(#dara-belly)" />

      {/* right arm (waving) */}
      <g transform={wave ? 'rotate(-24 95 76)' : 'rotate(-8 95 76)'}>
        <rect x="88" y="62" width="11" height="30" rx="5.5" fill="#1D943B" />
        <circle cx="93.5" cy="61" r="7.5" fill="#2AA84C" />
      </g>

      {/* face */}
      <ellipse cx="47" cy="66" rx="6.2" ry="7" fill="#12291C" />
      <ellipse cx="73" cy="66" rx="6.2" ry="7" fill="#12291C" />
      <circle cx="49" cy="63.5" r="2.1" fill="#ffffff" />
      <circle cx="75" cy="63.5" r="2.1" fill="#ffffff" />
      {/* cheeks */}
      <ellipse cx="36" cy="76" rx="5" ry="3.4" fill="#F0A8A0" opacity=".45" />
      <ellipse cx="84" cy="76" rx="5" ry="3.4" fill="#F0A8A0" opacity=".45" />
      {/* smile */}
      <path d="M52 79c2.6 3.4 13.4 3.4 16 0" stroke="#12291C" strokeWidth="2.6" strokeLinecap="round" fill="none" />

      {/* graduation cap */}
      <path d="M60 8 104 26 60 44 16 26z" fill="#00442A" />
      <path d="M60 8 104 26 60 44z" fill="#00552A" />
      <rect x="49" y="34" width="22" height="12" rx="4" fill="#00341F" />
      {/* tassel */}
      <path d="M100 29v13" stroke="#E87E04" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="100" cy="45" r="4.2" fill="#E87E04" />

      {/* little star badge on the belly */}
      <path d="M60 87 62.35 92.76 68.56 93.22 63.80 97.24 65.29 103.28 60 100 54.71 103.28 56.20 97.24 51.44 93.22 57.65 92.76z" fill="#E87E04" opacity=".9" />
    </svg>
  );
}
