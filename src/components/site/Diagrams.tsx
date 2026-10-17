/** Thin-line technical schematics */

export function AngleDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 360" className={className} fill="none" aria-label="Combined vertical and horizontal pull angle range">
      <g className="stroke-steel" strokeWidth="1">
        {/* quay */}
        <path d="M20 300 H300 V340" />
        <path d="M300 300 L320 300" strokeDasharray="4 4" />
        <path d="M320 320 Q 400 312 500 320" strokeDasharray="2 6" />
        {/* bollard */}
        <path d="M120 300 V250 Q120 235 105 232 H165 Q150 235 150 250 V300" />
        <path d="M98 232 H172" />
      </g>
      {/* angle fan */}
      <g strokeWidth="1">
        <path className="stroke-primary draw-line" d="M135 250 L480 250" />
        <path className="stroke-primary draw-line" d="M135 250 L460 110" />
        <path className="stroke-primary/40" d="M135 250 L475 180" strokeDasharray="3 5" />
        <path className="stroke-primary" d="M235 250 A100 100 0 0 0 227 210" />
      </g>
      <g className="fill-muted-foreground font-mono" fontSize="11" letterSpacing="2">
        <text x="245" y="235">0°–45° V</text>
        <text x="410" y="100">MAX VERT.</text>
        <text x="420" y="270">HORIZ.</text>
        <text x="20" y="290">QUAY</text>
        <text x="330" y="345">SEAWARD →</text>
      </g>
      <g className="fill-primary font-mono" fontSize="12" letterSpacing="2">
        <text x="20" y="40">125 t</text>
      </g>
      <g className="stroke-steel/60" strokeWidth="1">
        <path d="M20 50 H90" />
      </g>
    </svg>
  );
}

export function PlanAngleDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 360" className={className} fill="none" aria-label="Horizontal angle range, plan view">
      <g className="stroke-steel" strokeWidth="1">
        <path d="M20 80 H340" />
        <circle cx="180" cy="110" r="18" />
        <circle cx="180" cy="110" r="10" />
      </g>
      <g strokeWidth="1">
        <path className="stroke-primary draw-line" d="M180 110 L180 330" />
        <path className="stroke-primary draw-line" d="M180 110 L60 300" />
        <path className="stroke-primary draw-line" d="M180 110 L300 300" />
        <path className="stroke-primary" d="M120 220 A125 125 0 0 0 240 220" />
      </g>
      <g className="fill-muted-foreground font-mono" fontSize="11" letterSpacing="2">
        <text x="20" y="70">QUAY EDGE — PLAN</text>
        <text x="150" y="250">±H</text>
        <text x="190" y="345">SEA</text>
      </g>
    </svg>
  );
}

export function RigDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 240" className={className} fill="none" aria-label="Test rig schematic">
      <g className="stroke-steel" strokeWidth="1">
        <path d="M10 200 H590" />
        <rect x="60" y="120" width="70" height="80" />
        <path d="M80 120 V100 H110 V120" />
        <rect x="40" y="70" width="110" height="130" strokeDasharray="4 4" />
        <rect x="330" y="150" width="200" height="50" />
        <rect x="350" y="130" width="60" height="20" />
        <circle cx="470" cy="175" r="14" />
      </g>
      <path className="stroke-primary draw-line" strokeWidth="1.5" d="M110 140 L350 140" />
      <g className="fill-muted-foreground font-mono" fontSize="10" letterSpacing="2">
        <text x="40" y="60">ENCLOSURE</text>
        <text x="200" y="130">2 m ROPE</text>
        <text x="350" y="225">RIG · LOAD PIN · LASER</text>
        <text x="540" y="140">→ VAN</text>
      </g>
      <path className="stroke-steel/60" strokeDasharray="2 4" d="M530 165 Q 560 150 590 150" />
    </svg>
  );
}
