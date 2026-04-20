"use client";

import { CreditScoreRadial } from "@/components/CreditScoreRadial";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  Building2,
  Gauge,
  Layers,
  Network,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const easeHouse = [0.22, 1, 0.36, 1] as const;

function Shell({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-shell px-6 md:px-8", className)}
      {...props}
    />
  );
}

function BrandMark() {
  return (
    <div className="group relative h-8 w-8 shrink-0">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        aria-hidden
        className="h-8 w-8 transition-transform duration-700 ease-house group-hover:rotate-90"
      >
        <circle
          cx="16"
          cy="16"
          r="15"
          fill="none"
          stroke="rgba(245,243,239,0.35)"
          strokeWidth={1}
        />
        <path
          d="M8 22V10L16 18L24 10V22"
          fill="none"
          stroke="#a78bfa"
          strokeWidth={2}
          strokeLinejoin="round"
        />
        <circle cx="16" cy="18" r="1.5" fill="#a78bfa" />
      </svg>
      <span className="sr-only">Moneyba.gg mark</span>
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="font-sans text-sm text-bone-muted transition-colors duration-200 ease-house hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      {children}
    </a>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroChild = (i: number) => ({
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : i * 0.1,
        duration: reduceMotion ? 0.01 : 0.6,
        ease: easeHouse,
      },
    },
  });

  const inView = {
    once: true,
    margin: "-80px" as const,
  };

  const fadeUp = (i: number) => ({
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : i * 0.1,
        duration: reduceMotion ? 0.01 : 0.55,
        ease: easeHouse,
      },
    },
  });

  const fadeUp150 = (i: number) => ({
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : i * 0.15,
        duration: reduceMotion ? 0.01 : 0.55,
        ease: easeHouse,
      },
    },
  });

  const loopStep = (i: number) => ({
    hidden: { opacity: 0, x: 16 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: reduceMotion ? 0 : i * 0.12,
        duration: reduceMotion ? 0.01 : 0.55,
        ease: easeHouse,
      },
    },
  });

  return (
    <div className="min-h-screen bg-ink text-bone">
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 h-16 border-b backdrop-blur-md backdrop-saturate-[120%] transition-[background-color,border-color] duration-200 ease-house",
          scrolled
            ? "border-[rgba(31,31,38,0.85)] bg-[rgba(17,17,20,0.75)]"
            : "border-[rgba(31,31,38,0.6)] bg-[rgba(17,17,20,0.6)]"
        )}
      >
        <Shell className="flex h-full items-center justify-between gap-6">
          <a
            href="#top"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <BrandMark />
            <span className="font-sans text-lg font-medium tracking-[-0.01em] text-bone">
              moneyba
              <span className="text-signal-glow">.gg</span>
            </span>
          </a>
          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Primary"
          >
            <NavLink href="#protocol">Protocol</NavLink>
            <NavLink href="#markets">Markets</NavLink>
            <NavLink href="#analytics">Analytics</NavLink>
            <NavLink href="#docs">Docs</NavLink>
            <NavLink href="#governance">Governance</NavLink>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Launch App
            </Button>
            <Button size="sm" className="shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              Connect Wallet
            </Button>
          </div>
        </Shell>
      </header>

      <main id="top">
        <section className="relative overflow-hidden pt-16" aria-labelledby="hero-heading">
          <div className="pointer-events-none absolute inset-0 bg-ink" />
          <div
            className="pointer-events-none absolute inset-0 bg-grid mask-radial"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(124,58,237,0.25),transparent)]"
            aria-hidden
          />
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.015] mix-blend-overlay"
            aria-hidden
          >
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>

          <Shell className="relative z-10 pb-36 pt-28">
            <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <div className="space-y-8">
                <motion.div
                  variants={heroChild(0)}
                  initial="hidden"
                  animate="show"
                  className="inline-flex items-center gap-2 rounded-full border border-signal-500/30 bg-signal-500/10 px-3 py-1"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-500" />
                  </span>
                  <span className="font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-signal-glow">
                    Protocol v2.4 · Live on four chains
                  </span>
                </motion.div>

                <motion.div variants={heroChild(1)} initial="hidden" animate="show">
                  <h1
                    id="hero-heading"
                    className="font-display text-[48px] font-normal leading-[0.95] tracking-tight lg:text-[72px]"
                  >
                    <span className="block text-bone">Credit, built</span>
                    <span className="block font-display italic text-signal-gradient">
                      from behavior.
                    </span>
                  </h1>
                </motion.div>

                <motion.p
                  variants={heroChild(2)}
                  initial="hidden"
                  animate="show"
                  className="max-w-lg font-sans text-lg leading-relaxed text-bone-muted"
                >
                  Moneyba is a decentralized credit and financial identity
                  protocol. No banks. No bureaus. Creditworthiness underwritten
                  by algorithms, liquidity pools, and your peers — shaped by how
                  you actually behave on-chain.
                </motion.p>

                <motion.div
                  variants={heroChild(3)}
                  initial="hidden"
                  animate="show"
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    size="lg"
                    className="group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
                  >
                    Enter the protocol
                    <ArrowRight className="transition-transform duration-200 ease-house group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View live markets
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </motion.div>

                <motion.div
                  variants={heroChild(4)}
                  initial="hidden"
                  animate="show"
                  className="mt-6 border-t border-ink-border/60 pt-6"
                >
                  <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-bone-dim">
                    INTEGRATED ACROSS
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 font-sans text-sm text-bone-muted">
                    <span>Ethereum</span>
                    <span className="h-1 w-1 rounded-full bg-ink-muted" aria-hidden />
                    <span>Base</span>
                    <span className="h-1 w-1 rounded-full bg-ink-muted" aria-hidden />
                    <span>Optimism</span>
                    <span className="h-1 w-1 rounded-full bg-ink-muted" aria-hidden />
                    <span>Arbitrum</span>
                  </div>
                </motion.div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <CreditScoreRadial />
              </div>
            </div>
          </Shell>
        </section>

        <section
          id="markets"
          className="border-y border-ink-border/60 py-16"
          aria-labelledby="metrics-heading"
        >
          <h2 id="metrics-heading" className="sr-only">
            Live protocol metrics
          </h2>
          <div id="analytics" className="sr-only" aria-hidden>
            Analytics
          </div>
          <Shell>
            <div className="grid divide-y divide-ink-border/60 border-ink-border/60 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
              {[
                {
                  label: "TOTAL VALUE LOCKED",
                  value: "$284.6M",
                  delta: "+3.4%",
                  sub: "24h",
                  kind: "upOk" as const,
                },
                {
                  label: "ACTIVE LOANS",
                  value: "4,128",
                  delta: "+1.2%",
                  sub: "24h",
                  kind: "upOk" as const,
                },
                {
                  label: "AVG. APR",
                  value: "8.7%",
                  delta: "+0.3%",
                  sub: "24h",
                  kind: "upMuted" as const,
                },
                {
                  label: "DEFAULT RATE",
                  value: "2.14%",
                  delta: "-0.08%",
                  sub: "24h",
                  kind: "downOk" as const,
                },
              ].map((cell, i) => (
                <motion.div
                  key={cell.label}
                  variants={fadeUp(i)}
                  initial="hidden"
                  whileInView="show"
                  viewport={inView}
                  className={cn(
                    "px-6 py-6 first:pl-0 last:pr-0 md:px-6",
                    i === 0 && "md:pl-0",
                    i === 3 && "md:pr-0"
                  )}
                >
                  <p className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-bone-dim">
                    {cell.label}
                  </p>
                  <p className="mt-2 font-display text-4xl text-bone tabular lg:text-[40px]">
                    {cell.value}
                  </p>
                  <div className="mt-3 font-sans text-[11px] tabular">
                    {cell.kind === "upOk" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-ok/10 px-1.5 py-0.5 text-ok">
                        <ArrowUp className="h-3 w-3" aria-hidden />
                        {cell.delta} {cell.sub}
                      </span>
                    )}
                    {cell.kind === "upMuted" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-ink-raised px-1.5 py-0.5 text-bone-dim">
                        <ArrowUp className="h-3 w-3" aria-hidden />
                        {cell.delta} {cell.sub}
                      </span>
                    )}
                    {cell.kind === "downOk" && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-ok/10 px-1.5 py-0.5 text-ok">
                        <ArrowDown className="h-3 w-3" aria-hidden />
                        {cell.delta} {cell.sub}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-10 text-center font-sans text-xs text-bone-dim tabular">
              Updated every block · 12,847 borrowers · 31,204 lenders · Live
              across 4 chains
            </p>
            <p className="mt-3 text-center font-sans text-xs leading-relaxed text-bone-dim tabular">
              Default rate: 2.14% (down from 3.1% twelve weeks ago —
              algorithmic underwriting is compressing risk over time)
            </p>
            <p className="mt-3 text-center font-sans text-xs text-bone-dim tabular">
              TVL: $284.6M, up 3.4% over the last 24 hours · Active loans: 4,128,
              up 1.2% in 24h · Average APR across all open markets: 8.7% ·
              Unique borrowers: 12,847 · Unique lenders: 31,204 · Live on
              Ethereum, Base, Optimism, and Arbitrum · Currently on Protocol
              v2.4 · Audited by Trail of Bits · $38M raised, Series B led by
              Paradigm · Asset composition: 58.2% USDC, 24.7% ETH, 10.4% DAI,
              6.7% WBTC · Tier distribution: Tier A 1,824 users ($142.3M), Tier B
              1,608 users ($98.7M), Tier C 512 users ($31.4M), Tier D 184 users
              ($12.2M)
            </p>
          </Shell>
        </section>

        <section
          id="protocol"
          className="py-28"
          aria-labelledby="protocol-heading"
        >
          <Shell>
            <div id="staking" className="sr-only" aria-hidden>
              Staking
            </div>
            <div id="treasury" className="sr-only" aria-hidden>
              Treasury
            </div>
            <div id="epoch-schedule" className="sr-only" aria-hidden>
              Epoch schedule
            </div>
            <div id="governance" className="sr-only" aria-hidden>
              Governance
            </div>
            <div className="mb-16 max-w-2xl">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-bone-dim">
                THE PROTOCOL
              </p>
              <h2
                id="protocol-heading"
                className="mt-3 font-display text-5xl font-normal text-bone"
              >
                Credit becomes an{" "}
                <span className="font-display italic text-signal-glow">
                  open substrate
                </span>
                .
              </h2>
              <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-bone-muted">
                Three primitives replace what the banking system hoards behind
                opaque scores and closed bureaus. Each one is verifiable,
                composable, and belongs to you.
              </p>
            </div>

            <div className="space-y-8 text-sm leading-relaxed text-bone-muted">
              <p>
                Moneyba.gg is a decentralized credit and financial identity
                protocol for the on-chain economy. It replaces traditional
                credit bureaus with open, verifiable, wallet-native
                creditworthiness.
              </p>
              <p>
                The core insight: In TradFi, credit is gatekept by three private
                bureaus (Equifax, Experian, TransUnion) using opaque scoring
                models that most people can&apos;t see, contest, or move across
                borders. In on-chain finance, every repayment, every collateral
                event, every liquidation is already public — but no protocol has
                turned that signal into a coherent, portable credit identity.
                Moneyba does.
              </p>
              <p className="font-sans text-sm font-semibold text-bone">
                How it actually works (four primitives):
              </p>
              <ol className="list-decimal space-y-4 pl-5 marker:text-bone-dim">
                <li>
                  Algorithmic underwriting. Moneyba&apos;s scoring model reads
                  on-chain history across all supported chains and synthesizes
                  four behavioral signals into a score from 0 to 1000:
                  repayment consistency (35% weight), collateral health (25%),
                  protocol tenure (20%), and position diversification (20%).
                  Weights are set by protocol governance and fully transparent.
                  Unlike FICO, you can read your own model. Users are assigned a
                  risk tier: A (Prime, 4.2–6.8% APR), B (Established, 7.1–10.4%),
                  C (Emerging, 10.9–15.2%), D (Unbacked, 15.8–24.0%).
                </li>
                <li>
                  Pool-backed and peer-backed liquidity. Borrowers request
                  capital, and lenders fund it — either through yield-seeking
                  liquidity pools that auto-allocate by tier, or through direct
                  peer underwriting where individual lenders stake reputation on
                  individual borrowers. No protocol-taken spread. Interest flows
                  directly to lenders net of a protocol fee (currently 8 basis
                  points).
                </li>
                <li>
                  Behavioral reputation. Every on-time repayment, every day of
                  healthy collateral, every successful peer underwriting accrues
                  trust badges and lifts the score. Defaults flag the wallet
                  permanently but recoverably — the protocol believes in
                  redemption arcs, not permanent ledgers. Reputation is a soulbound
                  token on the wallet and is readable by any other protocol via a
                  single contract call.
                </li>
                <li>
                  Staked collateral. Users stake ETH, USDC, DAI, or WBTC as
                  collateral. Collateral ratio (currently 150% protocol minimum,
                  180%+ recommended) directly feeds the score. Staked assets earn
                  a base yield (3.8–4.1% APY) independent of any borrowing
                  activity, so capital isn&apos;t idle.
                </li>
              </ol>
              <p className="font-sans text-sm font-semibold text-bone">
                What users actually do on the platform:
              </p>
              <ul className="list-disc space-y-2 pl-5 marker:text-bone-dim">
                <li>Connect a wallet (any EVM) or email</li>
                <li>
                  View their credit score, tier, and four-pillar behavioral
                  breakdown
                </li>
                <li>
                  Request loans: specify amount, asset, duration, and purpose; the
                  protocol quotes a rate based on their tier
                </li>
                <li>
                  Fund loans: browse a marketplace filtered by tier, asset,
                  duration, and source (pool vs. peer)
                </li>
                <li>Stake collateral to lift their score and earn base yield</li>
                <li>
                  Track reputation: see earned badges, default flags, tenure, and
                  a full on-chain audit trail
                </li>
              </ul>
              <p>
                Moneyba is where credit becomes a public good. Open. Portable.
                Permissionless. The credit system you were never given, rebuilt
                from the wallet up.
              </p>
              <p className="font-sans text-sm font-semibold text-bone">
                The audience this page must convert:
              </p>
              <ul className="list-disc space-y-2 pl-5 marker:text-bone-dim">
                <li>
                  On-chain power users who currently borrow on Aave/Compound and
                  resent being treated as anonymous
                </li>
                <li>
                  Crypto-native funds and DAOs that want institutional-quality
                  credit rails
                </li>
                <li>
                  TradFi professionals evaluating DeFi seriously — for whom this
                  page must feel like reading an S-1, not a meme coin landing page
                </li>
              </ul>
            </div>

            <div className="mt-16 overflow-hidden rounded-xl border border-ink-border/60 bg-ink-border/60">
              <div className="grid gap-px md:grid-cols-3">
                <motion.article
                  variants={fadeUp150(0)}
                  initial="hidden"
                  whileInView="show"
                  viewport={inView}
                  className="group bg-ink-soft p-8 transition-colors duration-200 ease-house hover:bg-ink-raised/60"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-signal-500/30 bg-signal-500/10 text-signal-glow transition-shadow duration-200 ease-house group-hover:shadow-[0_0_24px_-4px_rgba(124,58,237,0.25)]">
                    <ShieldCheck className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-normal text-bone">
                    Algorithmic underwriting
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-bone-muted">
                    Scores from 0 to 1000 synthesized from four on-chain signals:
                    repayment consistency (35%), collateral health (25%), protocol
                    tenure (20%), and position diversification (20%). Weights are
                    set by protocol governance and fully transparent. Unlike FICO,
                    you can read your own model.
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex h-2 overflow-hidden rounded-full bg-ink-raised">
                      <div className="h-full w-[35%] bg-tier-a/40" />
                      <div className="h-full w-[25%] bg-tier-b/40" />
                      <div className="h-full w-[20%] bg-signal-glow/35" />
                      <div className="h-full w-[20%] bg-warn/35" />
                    </div>
                    <div className="grid grid-cols-4 gap-2 font-sans text-[10px] uppercase tracking-wide text-bone-dim">
                      <span>Repay 35</span>
                      <span>Coll 25</span>
                      <span>Tenure 20</span>
                      <span>Diverse 20</span>
                    </div>
                  </div>
                </motion.article>

                <motion.article
                  variants={fadeUp150(1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={inView}
                  className="group bg-ink-soft p-8 transition-colors duration-200 ease-house hover:bg-ink-raised/60"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-signal-500/30 bg-signal-500/10 text-signal-glow transition-shadow duration-200 ease-house group-hover:shadow-[0_0_24px_-4px_rgba(124,58,237,0.25)]">
                    <Network className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-normal text-bone">
                    Pool + peer liquidity
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-bone-muted">
                    Borrowers request capital at a rate determined by tier.
                    Lenders fund through auto-allocating yield pools or by
                    directly underwriting individual borrowers. No intermediaries.
                    Interest flows lender-to-lender, net of an 8 basis point
                    protocol fee.
                  </p>
                  <div className="mt-6 space-y-3">
                    <div>
                      <div className="flex items-center justify-between font-sans text-xs text-bone-muted">
                        <span>Pool-backed</span>
                        <span className="font-mono text-xs tabular">64%</span>
                      </div>
                      <div className="mt-1 h-2 rounded-full bg-ink-raised">
                        <div className="h-2 w-[64%] rounded-full bg-signal-500/40" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between font-sans text-xs text-bone-muted">
                        <span>Peer-backed</span>
                        <span className="font-mono text-xs tabular">36%</span>
                      </div>
                      <div className="mt-1 h-2 rounded-full bg-ink-raised">
                        <div className="h-2 w-[36%] rounded-full bg-signal-glow/40" />
                      </div>
                    </div>
                  </div>
                </motion.article>

                <motion.article
                  variants={fadeUp150(2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={inView}
                  className="group bg-ink-soft p-8 transition-colors duration-200 ease-house hover:bg-ink-raised/60"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-signal-500/30 bg-signal-500/10 text-signal-glow transition-shadow duration-200 ease-house group-hover:shadow-[0_0_24px_-4px_rgba(124,58,237,0.25)]">
                    <Gauge className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-normal text-bone">
                    Behavioral reputation
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-bone-muted">
                    Trust badges, default flags, and tenure accrue to your wallet
                    as a soulbound financial identity — readable by any protocol via
                    a single contract call. Defaults are recoverable. The protocol
                    believes in redemption arcs, not permanent ledgers.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "First Repay",
                      "10-Streak",
                      "Long Coll",
                      "Peer UW",
                    ].map((label) => (
                      <div
                        key={label}
                        className="inline-flex items-center gap-1 rounded-md border border-ink-border px-2 py-1 font-sans text-[11px] text-bone-muted"
                      >
                        <Award className="h-3.5 w-3.5" aria-hidden />
                        {label}
                      </div>
                    ))}
                  </div>
                </motion.article>
              </div>
            </div>
          </Shell>
        </section>

        <section
          className="border-y border-ink-border py-28"
          aria-labelledby="model-heading"
        >
          <Shell>
            <div className="mb-16 max-w-2xl">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-bone-dim">
                THE MODEL
              </p>
              <h2
                id="model-heading"
                className="mt-3 font-display text-5xl font-normal text-bone"
              >
                The math, in the{" "}
                <span className="font-display italic text-signal-glow">open</span>
                .
              </h2>
              <p className="mt-4 font-sans text-base leading-relaxed text-bone-muted">
                Every scoring weight, every tier threshold, every APR band is
                protocol-defined and on-chain. This is what your score is actually
                made of — and what each tier unlocks.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
              <div className="overflow-hidden rounded-xl border border-ink-border">
                <div className="grid grid-cols-[1.4fr_0.6fr_1.4fr_0.9fr] border-b border-ink-border bg-ink-raised/40 px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-bone-dim">
                  <span>SIGNAL</span>
                  <span>WEIGHT</span>
                  <span>EXAMPLE INPUT</span>
                  <span className="text-right">DIRECTION</span>
                </div>
                {[
                  {
                    signal: "Repayment consistency",
                    weight: "35%",
                    example: "24 of 25 loans on time",
                    dir: "Lifts score",
                    chip: "ok" as const,
                  },
                  {
                    signal: "Collateral health",
                    weight: "25%",
                    example: "164% ratio (min 150%)",
                    dir: "Lifts score",
                    chip: "ok" as const,
                  },
                  {
                    signal: "Protocol tenure",
                    weight: "20%",
                    example: "14 months active",
                    dir: "Lifts score",
                    chip: "ok" as const,
                  },
                  {
                    signal: "Position diversification",
                    weight: "20%",
                    example: "2 pools (concentrated)",
                    dir: "Caps score",
                    chip: "warn" as const,
                  },
                ].map((row, idx) => (
                  <div
                    key={row.signal}
                    className={cn(
                      "grid grid-cols-[1.4fr_0.6fr_1.4fr_0.9fr] items-center px-6 py-4 transition-colors duration-200 ease-house hover:bg-ink-raised/30",
                      idx < 3 && "border-b border-ink-border"
                    )}
                  >
                    <span className="font-sans text-sm text-bone">{row.signal}</span>
                    <span className="font-mono text-sm text-signal-glow tabular">
                      {row.weight}
                    </span>
                    <span className="font-sans text-[13px] text-bone-muted">
                      {row.example}
                    </span>
                    <span className="flex justify-end">
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 font-sans text-[11px]",
                          row.chip === "ok" && "bg-ok/10 text-ok",
                          row.chip === "warn" && "bg-warn/10 text-warn"
                        )}
                      >
                        {row.dir}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <div className="overflow-hidden rounded-xl border border-ink-border">
                  {[
                    {
                      letter: "A",
                      label: "Prime",
                      apr: "4.2\u20136.8%",
                      color: "bg-tier-a",
                    },
                    {
                      letter: "B",
                      label: "Established",
                      apr: "7.1\u201310.4%",
                      color: "bg-tier-b",
                    },
                    {
                      letter: "C",
                      label: "Emerging",
                      apr: "10.9\u201315.2%",
                      color: "bg-tier-c",
                    },
                    {
                      letter: "D",
                      label: "Unbacked",
                      apr: "15.8\u201324.0%",
                      color: "bg-tier-d",
                    },
                  ].map((tier, i) => (
                    <div
                      key={tier.letter}
                      className={cn(
                        "flex items-stretch gap-0 bg-ink-soft",
                        i > 0 && "mt-px"
                      )}
                    >
                      <div className={cn("w-1", tier.color)} aria-hidden />
                      <div className="flex flex-1 items-center justify-between px-5 py-4">
                        <div>
                          <p
                            className={cn(
                              "font-display text-[32px]",
                              tier.letter === "A" && "text-tier-a",
                              tier.letter === "B" && "text-tier-b",
                              tier.letter === "C" && "text-tier-c",
                              tier.letter === "D" && "text-tier-d"
                            )}
                          >
                            {tier.letter}
                          </p>
                          <p className="font-sans text-xs font-medium uppercase tracking-[0.12em] text-bone-muted">
                            {tier.label}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-bone-dim">
                            APR
                          </p>
                          <p className="font-mono text-base text-bone tabular">
                            {tier.apr}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 font-sans text-xs text-bone-dim tabular">
                  Rates update every epoch based on pool utilization. Current epoch:
                  847.
                </p>
              </div>
            </div>
          </Shell>
        </section>

        <section className="py-28" aria-labelledby="loop-heading">
          <Shell>
            <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
              <div>
                <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-bone-dim">
                  THE LOOP
                </p>
                <h2
                  id="loop-heading"
                  className="mt-3 font-display text-5xl font-normal text-bone"
                >
                  <span className="block">Four steps.</span>
                  <span className="mt-2 block font-display italic text-bone-muted">
                    One living score.
                  </span>
                </h2>
                <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-bone-muted">
                  Your wallet is your identity. Your behavior is your collateral.
                  Every on-chain action either compounds your reputation or costs
                  you points — and the market prices you accordingly.
                </p>
              </div>

              <div className="relative pl-2">
                <div
                  className="pointer-events-none absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-signal-500/80 via-ink-border to-transparent"
                  aria-hidden
                />
                <div className="space-y-0">
                  {[
                    {
                      n: "01",
                      title: "Connect and onboard",
                      icon: Wallet,
                      body: "Sign in with any EVM wallet — MetaMask, Rainbow, Coinbase, WalletConnect. Optional email binding through NextAuth for off-chain notifications, session continuity, and multi-device access. Your wallet is now your identity.",
                    },
                    {
                      n: "02",
                      title: "Stake or borrow",
                      icon: Layers,
                      body:
                        "Stake ETH, USDC, DAI, or WBTC to seed your credit profile. Staked collateral earns 3.8–4.1% base yield independent of any borrowing activity, so your capital isn't idle. Or skip staking entirely and request a loan against your behavioral history — the protocol will quote a rate based on your current tier.",
                    },
                    {
                      n: "03",
                      title: "Build reputation",
                      icon: Users,
                      body: "Every on-time repayment compounds your score. Every day of healthy collateral compounds it further. Peer underwriting — staking reputation on other borrowers — unlocks the fastest growth curve. Late payments and defaults cost you, but nothing is permanent. The protocol believes in redemption.",
                    },
                    {
                      n: "04",
                      title: "Unlock better terms",
                      icon: Sparkles,
                      body: "Tier up. APRs compress by 200–400 basis points per tier. Borrowing limits expand. Collateral requirements relax. Trust compounds into real, measurable economic advantage — saved basis points that accrue over every loan you take, forever.",
                    },
                  ].map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.n}
                        variants={loopStep(i)}
                        initial="hidden"
                        whileInView="show"
                        viewport={inView}
                        className="relative flex gap-6 pb-10"
                      >
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink-border bg-ink-raised">
                          <Icon className="h-5 w-5 text-signal-glow" aria-hidden />
                        </div>
                        <div className="pt-1.5">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[11px] text-bone-dim tabular">
                              {step.n}
                            </span>
                            <h3 className="font-display text-xl font-normal text-bone">
                              {step.title}
                            </h3>
                          </div>
                          <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-bone-muted">
                            {step.body}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Shell>
        </section>

        <section
          className="border-b border-ink-border py-28"
          aria-labelledby="personas-heading"
        >
          <Shell>
            <div className="mb-16 max-w-2xl">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-bone-dim">
                IN PRACTICE
              </p>
              <h2
                id="personas-heading"
                className="mt-3 font-display text-5xl font-normal text-bone"
              >
                Who the protocol{" "}
                <span className="font-display italic text-signal-glow">serves</span>
                .
              </h2>
              <p className="mt-4 font-sans text-base leading-relaxed text-bone-muted">
                Moneyba is deliberately built for four overlapping users. Each gets
                a different edge from the same underlying primitive.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "On-chain traders",
                  icon: TrendingUp,
                  body: "Active traders who need capital without liquidating their ETH position. Moneyba prices credit based on your on-chain track record, not a KYC form. Competitive rates for borrowers with real history.",
                  label: "AVG. LOAN SIZE",
                  value: "$24,800",
                },
                {
                  title: "Crypto-native funds",
                  icon: Building2,
                  body: "Funds and DAOs operating treasuries on-chain. Access institutional-scale credit lines without off-chain paperwork. Peer-backed underwriting lets funds extend credit to each other at transparent rates.",
                  label: "LARGEST ACTIVE LOAN",
                  value: "$2.4M",
                },
                {
                  title: "Validators and stakers",
                  icon: ShieldCheck,
                  body: "Professional validators managing infrastructure capital. Use restaked ETH as collateral for short-term liquidity bridges. Maintain validator uptime without rotating core collateral positions.",
                  label: "VALIDATOR LOANS",
                  value: "412",
                },
                {
                  title: "DeFi power users",
                  icon: Sparkles,
                  body: "Users who've been transacting on-chain for years and resent being treated as anonymous. Finally, a protocol that reads your history as the asset it is. Tier A users save 400+ basis points over Aave.",
                  label: "TIER A MEMBERS",
                  value: "1,824",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="rounded-xl border border-ink-border bg-ink-soft p-6 transition-colors duration-200 ease-house hover:bg-ink-raised/40"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-ink-border bg-ink-raised text-bone-muted">
                      <Icon className="h-4 w-4" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-normal text-bone">
                      {card.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-bone-muted">
                      {card.body}
                    </p>
                    <div className="mt-6 border-t border-ink-border pt-4">
                      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-bone-dim">
                        {card.label}
                      </p>
                      <p className="mt-1 font-display text-2xl text-bone tabular">
                        {card.value}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </Shell>
        </section>

        <section className="border-y border-ink-border py-20">
          <Shell>
            <p className="mb-10 text-center font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-bone-dim">
              BACKED BY TEAMS WHO BUILT THE LAST GENERATION
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 font-sans text-lg font-medium uppercase tracking-wide text-bone-muted/60 transition-opacity duration-200">
              {[
                "PARADIGM",
                "VARIANT",
                "DRAGONFLY",
                "a16z crypto",
                "1kx",
                "ROBOT VENTURES",
                "POLYCHAIN",
                "ELECTRIC",
              ].map((name) => (
                <span
                  key={name}
                  className="cursor-default transition-opacity duration-200 ease-house hover:opacity-100"
                >
                  {name}
                </span>
              ))}
            </div>
            <div className="mt-10 space-y-2 text-center font-sans text-[13px] text-bone-dim tabular">
              <p>$38M raised · Series B led by Paradigm</p>
              <p>
                Smart contracts audited by Trail of Bits · Zellic · Spearbit
              </p>
              <p>$10M bug bounty live on Immunefi · Zero incidents since launch</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-px border border-ink-border sm:grid-cols-3">
              {[
                { label: "TOTAL VOLUME ORIGINATED", value: "$1.84B" },
                { label: "LOANS SERVICED", value: "68,400+" },
                { label: "AVG. UPTIME (90D)", value: "99.98%" },
              ].map((cell) => (
                <div
                  key={cell.label}
                  className="bg-ink-soft p-6 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
                >
                  <p className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-bone-dim">
                    {cell.label}
                  </p>
                  <p className="mt-2 font-display text-3xl text-bone tabular">
                    {cell.value}
                  </p>
                </div>
              ))}
            </div>
          </Shell>
        </section>

        <section className="relative overflow-hidden py-28">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(124,58,237,0.2),transparent)]"
            aria-hidden
          />
          <Shell className="relative z-10 mx-auto max-w-3xl px-8 text-center">
            <h2 className="font-display text-[60px] font-normal leading-[0.95] lg:text-[72px]">
              A financial identity that{" "}
              <span className="font-display italic text-signal-gradient">
                moves with you.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-sans text-lg leading-relaxed text-bone-muted">
              Open. Portable. Permissionless. The credit system you were never
              given, rebuilt from the wallet up. Your wallet becomes your credit
              report. Your behavior becomes your collateral. Your reputation moves
              with you across every protocol that reads the standard.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
              >
                Launch the app
                <ArrowRight className="transition-transform duration-200 ease-house group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="ghost">
                Read the whitepaper
              </Button>
            </div>
          </Shell>
        </section>
      </main>

      <footer className="border-t border-ink-border">
        <Shell className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <BrandMark />
              <span className="font-sans text-lg font-medium tracking-[-0.01em] text-bone">
                moneyba
                <span className="text-signal-glow">.gg</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs font-sans text-xs leading-relaxed text-bone-dim">
              A decentralized credit and financial identity protocol. Built for
              the on-chain economy, owned by the people who use it.
            </p>
          </div>
          <div>
            <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-bone-dim">
              Protocol
            </p>
            <ul className="space-y-2 font-sans text-sm text-bone-muted">
              <li>
                <a
                  href="#markets"
                  className="transition-colors duration-200 ease-house hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  Markets
                </a>
              </li>
              <li>
                <a
                  href="#analytics"
                  className="transition-colors duration-200 ease-house hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#staking"
                  className="transition-colors duration-200 ease-house hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  Staking
                </a>
              </li>
              <li>
                <a
                  href="#governance"
                  className="transition-colors duration-200 ease-house hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  Governance
                </a>
              </li>
              <li>
                <a
                  href="#treasury"
                  className="transition-colors duration-200 ease-house hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  Treasury
                </a>
              </li>
              <li>
                <a
                  href="#epoch-schedule"
                  className="transition-colors duration-200 ease-house hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  Epoch schedule
                </a>
              </li>
            </ul>
          </div>
          <div id="docs">
            <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-bone-dim">
              Developers
            </p>
            <ul className="space-y-2 font-sans text-sm text-bone-muted">
              {[
                "Docs",
                "API reference",
                "GitHub",
                "Bug bounty",
                "SDK",
                "Subgraph",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#docs"
                    className="transition-colors duration-200 ease-house hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div id="company" className="col-span-2 md:col-span-1">
            <p className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-bone-dim">
              Company
            </p>
            <ul className="space-y-2 font-sans text-sm text-bone-muted">
              {["About", "Brand", "Careers", "Press", "Research", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#company"
                      className="transition-colors duration-200 ease-house hover:text-bone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </Shell>
        <div className="border-t border-ink-border">
          <Shell className="flex flex-col items-start justify-between gap-3 py-6 md:flex-row md:items-center">
            <p className="font-sans text-[11px] text-bone-dim">
              © 2026 Moneyba Labs. All rights reserved.
            </p>
            <p className="font-mono text-[11px] text-bone-dim tabular">
              Protocol v2.4 · Audited by Trail of Bits · Block 22,184,602
            </p>
          </Shell>
        </div>
      </footer>
    </div>
  );
}
