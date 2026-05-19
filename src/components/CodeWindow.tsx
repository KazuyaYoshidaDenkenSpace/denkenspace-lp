import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Tok = [string, string]; // [class, text]
type Snippet = { lang: string; file: string; lines: Tok[][] };

const snippets: Snippet[] = [
  {
    lang: "PHP / Laravel 12",
    file: "routes/api.php",
    lines: [
      [["c", "// 予約管理SaaS · multi-tenant"]],
      [
        ["n", "Route"],
        ["p", "::"],
        ["f", "middleware"],
        ["p", "("],
        ["s", "'auth:sanctum'"],
        ["p", ")->"],
        ["f", "group"],
        ["p", "("],
        ["k", "function"],
        ["p", " () {"],
      ],
      [
        ["", "    "],
        ["n", "Route"],
        ["p", "::"],
        ["f", "apiResource"],
        ["p", "("],
        ["s", "'reservations'"],
        ["p", ", "],
        ["n", "ReservationController"],
        ["p", "::"],
        ["k", "class"],
        ["p", ");"],
      ],
      [
        ["", "    "],
        ["n", "Route"],
        ["p", "::"],
        ["f", "post"],
        ["p", "("],
        ["s", "'/stripe/connect'"],
        ["p", ", ["],
        ["n", "StripeController"],
        ["p", "::"],
        ["k", "class"],
        ["p", ", "],
        ["s", "'onboard'"],
        ["p", "]);"],
      ],
      [["p", "});"]],
    ],
  },
  {
    lang: "TypeScript / Next.js 16",
    file: "app/calendar/page.tsx",
    lines: [
      [["c", "// 顧客向け予約カレンダー (RSC)"]],
      [
        ["k", "export default async function"],
        ["", " "],
        ["f", "CalendarPage"],
        ["p", "() {"],
      ],
      [
        ["", "  "],
        ["k", "const"],
        ["", " reservations = "],
        ["k", "await"],
        ["", " "],
        ["f", "fetchReservations"],
        ["p", "();"],
      ],
      [
        ["", "  "],
        ["k", "return"],
        ["", " "],
        ["p", "<"],
        ["n", "Scheduler"],
        ["", " items"],
        ["p", "={"],
        ["", "reservations"],
        ["p", "} "],
        ["", "mode"],
        ["p", "="],
        ["s", '"reservation"'],
        ["p", " />;"],
      ],
      [["p", "}"]],
    ],
  },
  {
    lang: "Rust 1.75 / Tokio",
    file: "vulnscan/core/src/scan.rs",
    lines: [
      [["c", "// CVE Scanner · Multi-Agent Debate"]],
      [
        ["k", "pub async fn"],
        ["", " "],
        ["f", "scan"],
        ["p", "("],
        ["", "deps: "],
        ["t", "Vec"],
        ["p", "<"],
        ["t", "Dep"],
        ["p", ">) -> "],
        ["t", "Result"],
        ["p", "<"],
        ["t", "Report"],
        ["p", "> {"],
      ],
      [
        ["", "    "],
        ["k", "let"],
        ["", " vulns = "],
        ["n", "osv"],
        ["p", "::"],
        ["f", "query_batch"],
        ["p", "(&"],
        ["", "deps"],
        ["p", ")."],
        ["f", "await"],
        ["p", "?;"],
      ],
      [
        ["", "    "],
        ["k", "let"],
        ["", " plan  = "],
        ["n", "debate"],
        ["p", "::"],
        ["f", "resolve"],
        ["p", "(&"],
        ["", "vulns"],
        ["p", ")."],
        ["f", "await"],
        ["p", "?;"],
      ],
      [
        ["", "    "],
        ["k", "Ok"],
        ["p", "("],
        ["n", "Report"],
        ["p", "::"],
        ["f", "new"],
        ["p", "("],
        ["", "vulns, plan"],
        ["p", "))"],
      ],
      [["p", "}"]],
    ],
  },
];

const colorClass: Record<string, string> = {
  k: "text-pink-400",
  s: "text-emerald-300",
  c: "text-slate-500 italic",
  n: "text-cyan-300",
  f: "text-violet-300",
  t: "text-amber-300",
  p: "text-slate-400",
  "": "text-slate-100",
};

const CodeWindow: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">(
    "typing"
  );

  const snippet = snippets[idx];
  const totalChars = snippet.lines.reduce(
    (sum, line) => sum + line.reduce((s, [, t]) => s + t.length, 0),
    0
  );

  useEffect(() => {
    let id: number | undefined;
    if (phase === "typing") {
      if (typed >= totalChars) {
        id = window.setTimeout(() => setPhase("pausing"), 0);
      } else {
        id = window.setTimeout(() => setTyped((c) => c + 1), 22);
      }
    } else if (phase === "pausing") {
      id = window.setTimeout(() => setPhase("erasing"), 2400);
    } else if (phase === "erasing") {
      if (typed <= 0) {
        setIdx((i) => (i + 1) % snippets.length);
        setPhase("typing");
        return;
      }
      id = window.setTimeout(() => setTyped((c) => Math.max(0, c - 5)), 8);
    }
    return () => {
      if (id !== undefined) clearTimeout(id);
    };
  }, [phase, typed, totalChars]);

  // Render lines according to typed character count
  let remaining = typed;
  const rendered: React.ReactNode[] = [];
  for (let li = 0; li < snippet.lines.length; li++) {
    const line = snippet.lines[li];
    const lineLen = line.reduce((s, [, t]) => s + t.length, 0);
    const isCurrent = remaining > 0 && remaining <= lineLen;

    rendered.push(
      <div key={li} className="flex">
        <span className="w-8 shrink-0 text-right pr-3 text-slate-600 select-none">
          {li + 1}
        </span>
        <span className="flex-1 whitespace-pre">
          {line.map(([cls, text], ti) => {
            const visible = Math.max(0, Math.min(text.length, remaining));
            remaining -= text.length;
            if (visible === 0) return null;
            return (
              <span key={ti} className={colorClass[cls]}>
                {text.slice(0, visible)}
              </span>
            );
          })}
          {isCurrent && (
            <span className="inline-block w-[2px] h-[1.1em] bg-cyan-300 ml-[1px] -mb-[2px] align-middle animate-pulse" />
          )}
        </span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1200 }}
      className="relative w-full max-w-xl rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.45)]"
    >
      {/* glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-500/20 via-transparent to-emerald-500/20" />

      {/* Window chrome */}
      <div className="relative flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <div className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>
        <div className="ml-2 px-3 py-1 rounded-md bg-slate-700/40 text-xs text-slate-300 font-mono">
          {snippet.file}
        </div>
      </div>

      {/* Code area */}
      <div className="relative p-5 font-mono text-[13px] leading-relaxed min-h-[220px] overflow-x-auto">
        {rendered}
      </div>

      {/* Status bar */}
      <div className="relative flex items-center justify-between px-4 py-2 bg-gradient-to-r from-sky-600/90 to-emerald-600/90 text-[11px] text-white font-mono tracking-wide">
        <span>{snippet.lang}</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green-300 animate-pulse" />
          <span>ready</span>
        </span>
      </div>
    </motion.div>
  );
};

export default CodeWindow;
