import Image from "next/image";

/**
 * Isometric illustrations for the service pillars.
 *
 * Drawn as inline SVG rather than fetched bitmaps: no network cost, no
 * licensing question, crisp at any density, and the palette is driven by the
 * same brand tokens as the rest of the page.
 *
 * A content record may supply `image` instead, in which case that file is
 * rendered and the drawing is skipped — so a purchased or downloaded 3D asset
 * pack can be dropped into `public/asset/` later with no code change.
 */
const BASE = "var(--color-brand-100)";
const SHELL = "#ffffff";
const EDGE = "var(--color-brand-300)";
const SHADE = "var(--color-brand-200)";
const ACCENT = "var(--color-brand-600)";
const ACCENT_SOFT = "var(--color-brand-400)";

export function PillarArt({ art, image, alt }) {
  if (image) {
    return (
      <Image
        src={image}
        alt={alt ?? ""}
        width={640}
        height={640}
        sizes="(min-width: 1024px) 20rem, 60vw"
        className="h-full w-full object-cover"
      />
    );
  }

  const Art = ART[art] ?? AiCubeArt;
  return (
    <svg viewBox="0 0 200 160" role="img" aria-hidden="true" className="mx-auto h-44 w-full">
      <Plinth />
      <Art />
    </svg>
  );
}

/** Every illustration sits on the same isometric plinth. */
function Plinth() {
  return (
    <g>
      <ellipse cx="100" cy="132" rx="62" ry="16" fill={SHADE} opacity="0.7" />
      <path d="M100 108 L154 128 L100 148 L46 128 Z" fill={BASE} />
      <path d="M46 128 L100 148 L100 152 L46 132 Z" fill={EDGE} />
      <path d="M154 128 L100 148 L100 152 L154 132 Z" fill={SHADE} />
    </g>
  );
}

function AiCubeArt() {
  return (
    <g>
      {/* Orbit */}
      <ellipse
        cx="100"
        cy="76"
        rx="56"
        ry="22"
        fill="none"
        stroke={ACCENT_SOFT}
        strokeWidth="2"
        transform="rotate(-14 100 76)"
      />
      <circle cx="47" cy="66" r="5" fill={ACCENT} />
      <circle cx="153" cy="86" r="5" fill={ACCENT} />

      {/* Cube */}
      <path d="M100 30 L142 54 L100 78 L58 54 Z" fill={SHELL} />
      <path d="M58 54 L100 78 L100 116 L58 92 Z" fill={SHADE} />
      <path d="M142 54 L100 78 L100 116 L142 92 Z" fill={EDGE} />
      <path d="M100 30 L142 54 L100 78 L58 54 Z" fill="none" stroke={EDGE} strokeWidth="1.5" />

      {/* AI badge */}
      <rect x="76" y="62" width="34" height="24" rx="6" fill={ACCENT} />
      <text
        x="93"
        y="79"
        textAnchor="middle"
        fill="#fff"
        fontSize="13"
        fontWeight="700"
        fontFamily="var(--font-display)"
      >
        AI
      </text>
    </g>
  );
}

function CloudArt() {
  return (
    <g>
      {/* Server slabs */}
      <path d="M100 84 L146 104 L100 124 L54 104 Z" fill={SHELL} stroke={EDGE} strokeWidth="1.5" />
      <path d="M54 104 L100 124 L100 130 L54 110 Z" fill={SHADE} />
      <path d="M146 104 L100 124 L100 130 L146 110 Z" fill={EDGE} />
      <circle cx="80" cy="106" r="3" fill={ACCENT} />
      <circle cx="90" cy="110" r="3" fill={ACCENT_SOFT} />

      <path d="M100 62 L146 82 L100 102 L54 82 Z" fill={SHELL} stroke={EDGE} strokeWidth="1.5" />
      <circle cx="80" cy="84" r="3" fill={ACCENT} />
      <circle cx="90" cy="88" r="3" fill={ACCENT_SOFT} />

      {/* Cloud */}
      <path
        d="M74 46c0-11 9-20 20-20 8 0 15 5 18 12 1 0 2-1 3-1 8 0 15 7 15 15s-7 15-15 15H78c-8 0-14-6-14-14 0-6 4-11 10-13z"
        fill={SHELL}
        stroke={EDGE}
        strokeWidth="1.5"
      />
      <path
        d="M78 67h37c5 0 9-2 12-6H70c2 4 5 6 8 6z"
        fill={SHADE}
      />
    </g>
  );
}

function CodeArt() {
  return (
    <g>
      {/* Back panel */}
      <path d="M112 40 L152 62 L152 104 L112 82 Z" fill={SHADE} />
      <path d="M112 40 L152 62 L136 70 L96 48 Z" fill={EDGE} />

      {/* Window */}
      <path d="M50 34 L124 34 L124 96 L50 96 Z" fill={SHELL} stroke={EDGE} strokeWidth="1.5" rx="4" />
      <path d="M50 34 L124 34 L124 46 L50 46 Z" fill={ACCENT} />
      <circle cx="58" cy="40" r="2.5" fill="#fff" opacity="0.9" />
      <circle cx="66" cy="40" r="2.5" fill="#fff" opacity="0.6" />
      <circle cx="74" cy="40" r="2.5" fill="#fff" opacity="0.4" />

      <text
        x="87"
        y="78"
        textAnchor="middle"
        fill={ACCENT}
        fontSize="24"
        fontWeight="700"
        fontFamily="var(--font-mono, monospace)"
      >
        {"</>"}
      </text>

      {/* Front block */}
      <path d="M124 84 L146 96 L124 108 L102 96 Z" fill={EDGE} />
    </g>
  );
}

function ShieldArt() {
  return (
    <g>
      {/* Stacked plates behind */}
      <path d="M118 40 L150 58 L150 96 L118 78 Z" fill={SHADE} />
      <path d="M108 34 L140 52 L140 90 L108 72 Z" fill={EDGE} />

      {/* Shield */}
      <path
        d="M84 26 L118 40 L118 74c0 16-14 28-34 36-20-8-34-20-34-36V40z"
        fill={ACCENT}
      />
      <path
        d="M84 26 L118 40 L118 74c0 16-14 28-34 36z"
        fill={ACCENT_SOFT}
        opacity="0.55"
      />
      <path
        d="M70 66 l9 9 18-19"
        fill="none"
        stroke="#fff"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}

const ART = {
  "ai-cube": AiCubeArt,
  cloud: CloudArt,
  code: CodeArt,
  shield: ShieldArt,
};

export default PillarArt;
