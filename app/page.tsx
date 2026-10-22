import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  FileX2,
  GitCommitHorizontal,
  GitFork,
  Github,
  Lock,
  Search,
  ShieldCheck,
  Star,
  Wallet,
  X,
  Zap,
} from "lucide-react";

const languages = [
  { name: "TypeScript", pct: 62, color: "bg-blue-500" },
  { name: "Python", pct: 24, color: "bg-amber-400" },
  { name: "Rust", pct: 14, color: "bg-orange-600" },
];

const repos = [
  { name: "realtime-chat", desc: "WebSocket chat engine, 12k msgs/sec", lang: "TypeScript", stars: "1.2k", forks: "184" },
  { name: "ml-pipeline", desc: "Training pipeline with auto-eval", lang: "Python", stars: "640", forks: "91" },
];

const steps = {
  developers: [
    { title: "Connect GitHub", text: "One click. We import your repos, languages and activity." },
    { title: "Your profile builds itself", text: "Pinned projects, commit history and stack stay live. No resume to write or update." },
    { title: "Get hired, get paid", text: "Accept offers, deliver, and keep 90% of every payment." },
  ],
  clients: [
    { title: "Post a project or search", text: "Filter by stack, activity, availability and rate." },
    { title: "Judge real work", text: "Read the actual code, commits and shipped projects before you message anyone." },
    { title: "Pay when it's done", text: "Funds sit in escrow and release when you approve the work." },
  ],
};

const compare = [
  { label: "Proof of skill", giggle: "Live GitHub code and activity", other: "Self-written claims and reviews" },
  { label: "Profile setup", giggle: "One click, always up to date", other: "Hours writing a resume" },
  { label: "Platform fee", giggle: "Flat 10%", other: "Often 20% or more" },
  { label: "Payout", giggle: "Within 24 hours", other: "Days or weeks on hold" },
  { label: "Built for", giggle: "Developers and their clients", other: "Every job under the sun" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_0%,color-mix(in_srgb,var(--primary)_16%,transparent),transparent),radial-gradient(40%_40%_at_0%_30%,color-mix(in_srgb,var(--highlight)_10%,transparent),transparent)]"
        />
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div className="min-w-0">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-3.5 py-1.5 text-sm font-medium text-accent-foreground">
              <Github className="h-4 w-4" /> The marketplace built for developers
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Your code is your{" "}
              <span className="bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent">
                resume.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Connect GitHub and get a live profile that updates itself. Clients hire on real
              projects, not PDFs. Flat 10% fee, paid within 24 hours.
            </p>

            <form action="/browse" className="mt-8 flex max-w-xl items-center gap-2 rounded-2xl border border-border bg-card p-2 shadow-lg shadow-primary/5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
              <Search className="ml-2 h-5 w-5 shrink-0 text-muted-foreground" />
              <input
                name="q"
                aria-label="Search developers"
                placeholder="Try “Next.js”, “Rust”, “React Native”"
                className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-muted-foreground"
              />
              <Button type="submit" size="default">Find developers</Button>
            </form>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="highlight" size="lg">
                <Link href="/signup">
                  <Github /> Create profile with GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/post-job">Post a project</Link>
              </Button>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-success" /> Free to join. No resume. No credit card.
            </p>
          </div>

          {/* Live profile preview */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-primary/10">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-violet-500 text-lg font-bold text-primary-foreground">
                  AK
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="truncate text-lg font-bold">Ayesha Khan</h3>
                    <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Full-stack engineer · Remote</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Live from GitHub
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[
                  ["48", "Repos"],
                  ["1,203", "Commits / yr"],
                  ["2.4k", "Stars"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-xl bg-secondary px-2 py-3">
                    <p className="text-lg font-bold">{v}</p>
                    <p className="text-xs text-muted-foreground">{l}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <div className="flex h-2 overflow-hidden rounded-full bg-muted">
                  {languages.map((l) => (
                    <div key={l.name} className={l.color} style={{ width: `${l.pct}%` }} />
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  {languages.map((l) => (
                    <span key={l.name} className="flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${l.color}`} />
                      {l.name} {l.pct}%
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {repos.map((r) => (
                  <div key={r.name} className="rounded-xl border border-border p-3.5 transition-colors hover:border-primary/40">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold text-primary">{r.name}</span>
                      <span className="text-xs text-muted-foreground">{r.lang}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                    <div className="mt-2 flex gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-warning" />{r.stars}</span>
                      <span className="flex items-center gap-1"><GitFork className="h-3.5 w-3.5" />{r.forks}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Rate</p>
                  <p className="text-lg font-bold">$55<span className="text-sm font-medium text-muted-foreground">/hr</span></p>
                </div>
                <Button>Hire Ayesha</Button>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">Sample profile</p>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-y border-border bg-card px-4 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            [FileX2, "0 resumes", "Your repos do the talking"],
            [Wallet, "10% flat fee", "Keep 90% of what you earn"],
            [Zap, "24h payouts", "No long payment holds"],
            [Lock, "Escrow", "Pay only when work is approved"],
          ].map(([Icon, title, sub]) => {
            const I = Icon as typeof Zap;
            return (
              <div key={title as string} className="flex items-start gap-3">
                <span className="rounded-xl bg-accent p-2.5 text-primary"><I className="h-5 w-5" /></span>
                <div>
                  <p className="font-bold">{title as string}</p>
                  <p className="text-sm text-muted-foreground">{sub as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Simple for both sides</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              No keyword-stuffed resumes, no guessing. Proof of skill is already public.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {([
              ["For developers", steps.developers, "bg-primary"],
              ["For clients", steps.clients, "bg-highlight"],
            ] as const).map(([title, list, dot]) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                <h3 className="mb-6 text-xl font-bold">{title}</h3>
                <ol className="space-y-6">
                  {list.map((s, i) => (
                    <li key={s.title} className="flex gap-4">
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${dot} ${dot === "bg-primary" ? "text-primary-foreground" : "text-highlight-foreground"}`}>
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold">{s.title}</p>
                        <p className="mt-1 text-muted-foreground">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-card px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Trust you can verify</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every claim on a Giggle profile links back to code you can read.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              [GitCommitHorizontal, "Live activity", "Commits, languages and pinned projects sync automatically, so profiles are never stale."],
              [ShieldCheck, "Verified ownership", "Developers sign in with GitHub, so the repos on a profile are provably theirs."],
              [Search, "Search by real stack", "Find developers by the languages and frameworks they actually ship, not by buzzwords."],
            ].map(([Icon, title, text]) => {
              const I = Icon as typeof Zap;
              return (
                <div key={title as string} className="rounded-2xl border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <span className="mb-4 inline-flex rounded-xl bg-accent p-3 text-primary"><I className="h-6 w-6" /></span>
                  <h3 className="text-lg font-bold">{title as string}</h3>
                  <p className="mt-2 text-muted-foreground">{text as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="pricing" className="scroll-mt-20 px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Giggle vs. the old way</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Resume sites and general marketplaces weren&apos;t built for developers. We were.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="grid grid-cols-[1fr_1.2fr_1.2fr] bg-secondary px-5 py-4 text-sm font-semibold">
              <span />
              <span className="text-primary">Giggle</span>
              <span className="text-muted-foreground">Resume sites &amp; marketplaces</span>
            </div>
            {compare.map((r) => (
              <div key={r.label} className="grid grid-cols-[1fr_1.2fr_1.2fr] items-center gap-3 border-t border-border px-5 py-4 text-sm">
                <span className="font-medium">{r.label}</span>
                <span className="flex items-start gap-2 font-medium">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {r.giggle}
                </span>
                <span className="flex items-start gap-2 text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/70" /> {r.other}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-violet-600 px-6 py-16 text-center text-primary-foreground md:px-12">
          <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <h2 className="relative text-3xl font-bold md:text-5xl">Stop writing resumes. Start shipping.</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Connect GitHub in one click and let your work get you hired.
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="highlight" size="lg">
              <Link href="/signup">Sign up free <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" className="bg-white/15 text-primary-foreground shadow-none hover:bg-white/25">
              <Link href="/post-job">Hire a developer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
