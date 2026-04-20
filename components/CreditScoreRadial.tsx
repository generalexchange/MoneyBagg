"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const CX = 180;
const CY = 180;
const R = 170;

function polarDeg(deg: number) {
  const rad = (deg * Math.PI) / 180;
  return {
    x: CX + R * Math.cos(rad),
    y: CY + R * Math.sin(rad),
  };
}

function buildArcPath(): string {
  const start = polarDeg(135);
  const end = polarDeg(45);
  return `M ${start.x} ${start.y} A ${R} ${R} 0 1 1 ${end.x} ${end.y}`;
}

function tickLine(scoreMarker: number) {
  const angleDeg = 135 + 270 * (scoreMarker / 1000);
  const rad = (angleDeg * Math.PI) / 180;
  const x = CX + R * Math.cos(rad);
  const y = CY + R * Math.sin(rad);
  const ux = Math.cos(rad);
  const uy = Math.sin(rad);
  const x1 = x - 10 * ux;
  const y1 = y - 10 * uy;
  const x2 = x + 10 * ux;
  const y2 = y + 10 * uy;
  return { x1, y1, x2, y2 };
}

export function CreditScoreRadial() {
  const reduceMotion = useReducedMotion();
  const pathD = useMemo(() => buildArcPath(), []);
  const scoreMv = useMotionValue(0);
  const scoreSpring = useSpring(scoreMv, {
    stiffness: reduceMotion ? 500 : 60,
    damping: reduceMotion ? 100 : 20,
  });
  const [displayScore, setDisplayScore] = useState(0);

  useMotionValueEvent(scoreSpring, "change", (latest) => {
    setDisplayScore(Math.round(latest));
  });

  useEffect(() => {
    scoreMv.set(742);
  }, [scoreMv]);

  const arcTransition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 1.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 };

  const cardTransition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const };

  const markers = [0, 250, 500, 750, 1000];

  return (
    <div className="relative mx-auto flex h-[360px] w-[360px] items-center justify-center">
      <div
        className="pointer-events-none absolute -inset-24 rounded-full border border-ink-border/30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-12 rounded-full border border-ink-border/60"
        aria-hidden
      />
      <div className="relative h-[360px] w-[360px]">
        <div
          className="pointer-events-none absolute inset-4 rounded-full bg-signal-500 opacity-20 blur-3xl"
          aria-hidden
        />
        <svg
          width="360"
          height="360"
          viewBox="0 0 360 360"
          role="img"
          aria-label="Illustrative credit score of 742 on a 0 to 1000 scale, tier B established"
          className="relative z-10"
        >
          <defs>
            <linearGradient
              id="arcGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity={1} />
            </linearGradient>
            <filter
              id="arcGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d={pathD}
            fill="none"
            stroke="#1f1f26"
            strokeWidth={10}
            strokeLinecap="round"
            aria-hidden
          />

          {markers.map((m) => {
            const t = tickLine(m);
            return (
              <line
                key={m}
                x1={t.x1}
                y1={t.y1}
                x2={t.x2}
                y2={t.y2}
                stroke="#2a2a33"
                strokeWidth={1}
                aria-hidden
              />
            );
          })}

          <motion.path
            d={pathD}
            fill="none"
            stroke="url(#arcGradient)"
            strokeWidth={10}
            strokeLinecap="round"
            pathLength={1}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 0.742 }}
            transition={arcTransition}
            filter="url(#arcGlow)"
          />
        </svg>

        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <p className="mb-2 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-bone-dim">
            CREDIT SCORE
          </p>
          <span className="font-display text-[60px] font-medium leading-none text-bone tabular">
            {displayScore}
          </span>
          <div className="mt-3 flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-[#a78bfa]"
              style={{ boxShadow: "0 0 12px #a78bfa" }}
              aria-hidden
            />
            <p className="font-sans text-sm text-bone-muted tabular">
              Tier B · <span className="text-bone">Established</span>
            </p>
          </div>
        </div>

        <motion.div
          className={cn(
            "absolute -left-20 top-8 z-30 rounded-lg border border-white/5 px-3 py-2",
            "bg-ink-soft/60 backdrop-blur-md"
          )}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...cardTransition, delay: reduceMotion ? 0 : 1.4 }}
        >
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-bone-dim">
            REPAYMENT
          </p>
          <p className="mt-1 font-mono text-sm text-bone tabular">94/100</p>
        </motion.div>

        <motion.div
          className={cn(
            "absolute -right-16 bottom-16 z-30 rounded-lg border border-white/5 px-3 py-2",
            "bg-ink-soft/60 backdrop-blur-md"
          )}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...cardTransition, delay: reduceMotion ? 0 : 1.7 }}
        >
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-bone-dim">
            COLLATERAL
          </p>
          <p className="mt-1 font-mono text-sm text-bone tabular">164%</p>
        </motion.div>
      </div>
    </div>
  );
}
