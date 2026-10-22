import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Megaphone,
  PenLine,
  Palette,
  Video,
  BarChart3,
  Headphones,
  Languages,
  Search,
  ShieldCheck,
  Star,
  Wallet,
  Zap,
  Check,
  MessageSquare,
} from "lucide-react";

const categories = [
  { icon: Code2, name: "Programming & Tech", sub: "Web, mobile, AI, DevOps" },
  { icon: Palette, name: "Design & Creative", sub: "Brand, UI/UX, illustration" },
  { icon: Megaphone, name: "Marketing", sub: "SEO, social, performance" },
  { icon: PenLine, name: "Writing & Translation", sub: "Copy, content, editing" },
  { icon: Video, name: "Video & Animation", sub: "Editing, motion, explainers" },
  { icon: BarChart3, name: "Data & Analytics", sub: "Dashboards, research, BI" },
  { icon: Headphones, name: "Support & Admin", sub: "Virtual assistants, ops" },
  { icon: Languages, name: "Voice & Audio", sub: "Voice-over, music, podcasts" },
];

const steps = {
  clients: [
    ["Post your project", "Describe what you need, your budget and timeline. It takes about five minutes."],
    ["Compare proposals", "Review portfolios, rates and reviews. Chat with the people you like before you decide."],
    ["Pay when it's done", "Funds are held in escrow and released only when you approve the work."],
  ],
  freelancers: [
    ["Build your profile", "Showcase your best work, set your rate and choose the services you offer."],
    ["Win projects", "Send proposals to briefs that fit, or let clients find you through search."],
    ["Get paid fast", "Keep 90% of every project. Payouts arrive within 24 hours of approval."],
  ],
};

const talent = [
  { initials: "SM", name: "Sara Malik", role: "Brand & UI designer", rate: 45, rating: "5.0", jobs: 86 },
  { initials: "DO", name: "Daniel Okafor", role: "Full-stack developer", rate: 60, rating: "4.9", jobs: 124 },
  { initials: "LP", name: "Lucía Pérez", role: "Content strategist", rate: 35, rating: "4.9", jobs: 97 },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-4 pb-20 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Hire great freelancers.
              <br />
              <span className="text-primary">Get great work done.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Giggle connects businesses with independent professionals for projects of every size.
              Transparent pricing, protected payments and no surprises.
            </p>

            <form
              action="/freelancers"
              className="mt-10 flex max-w-2xl items-center gap-2 rounded-full border border-border bg-card p-1.5 pl-5 shadow-sm transition-shadow focus-within:border-primary focus-within:shadow-md"
            >
              <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
              <input
                name="q"
                aria-label="Search services"
                placeholder="Try “logo design” or “React developer”"
                className="min-w-0 flex-1 bg-transparent py-2.5 text-base outline-none placeholder:text-muted-foreground"
              />
              <Button type="submit" size="lg" className="h-11">Search</Button>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
              <span>Popular:</span>
              {["Web development", "Logo design", "Copywriting", "Video editing"].map((t) => (
                <Link
                  key={t}
                  href={`/freelancers?q=${encodeURIComponent(t)}`}
                  className="rounded-full border border-border px-3 py-1 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promises */}
      <section className="border-y border-border bg-secondary/50 px-4 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            [Wallet, "Flat 10% fee", "One simple rate. No hidden charges."],
            [ShieldCheck, "Escrow protection", "You only pay for work you approve."],
            [Zap, "24-hour payouts", "Freelancers are paid within a day."],
          ].map(([Icon, title, sub]) => {
            const I = Icon as typeof Zap;
            return (
              <div key={title as string} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <I className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{title as string}</p>
                  <p className="text-sm text-muted-foreground">{sub as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Browse by category</h2>
              <p className="mt-3 text-muted-foreground">Find the right specialist for whatever you&apos;re building.</p>
            </div>
            <Link href="/freelancers" className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex">
              All categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(({ icon: Icon, name, sub }) => (
              <Link
                key={name}
                href={`/freelancers?q=${encodeURIComponent(name)}`}
                className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-accent/40"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="font-semibold">{name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 bg-secondary/50 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">How Giggle works</h2>
            <p className="mt-3 text-muted-foreground">A straightforward process for both sides of the table.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {([
              ["For clients", steps.clients],
              ["For freelancers", steps.freelancers],
            ] as const).map(([title, list]) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-8">
                <h3 className="mb-6 text-xl font-bold">{title}</h3>
                <ol className="space-y-6">
                  {list.map(([t, text], i) => (
                    <li key={t} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold">{t}</p>
                        <p className="mt-1 text-muted-foreground">{text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">Talent ready to start</h2>
            <p className="mt-3 text-muted-foreground">Example profiles, showing what you&apos;ll see when you search.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {talent.map((t) => (
              <article key={t.name} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-accent-foreground">
                    {t.initials}
                  </span>
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-1.5 font-bold">
                      {t.name} <BadgeCheck className="h-4 w-4 text-primary" aria-label="Verified" />
                    </h3>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Star className="h-4 w-4 fill-warning text-warning" /> {t.rating}
                    <span className="font-normal text-muted-foreground">({t.jobs} projects)</span>
                  </span>
                  <span className="font-semibold">${t.rate}<span className="font-normal text-muted-foreground">/hr</span></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / pricing */}
      <section id="pricing" className="scroll-mt-20 bg-secondary/50 px-4 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Simple, honest pricing</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Joining is free. We take a flat 10% only when a project is completed. Clients pay
              no service fees on top.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Free to post a project or create a profile",
                "Payments held safely in escrow until you approve",
                "Freelancers keep 90% and are paid within 24 hours",
                "Built-in messaging and file sharing",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <p className="text-sm font-medium text-muted-foreground">Example: a $1,000 project</p>
            <dl className="mt-6 space-y-4">
              <div className="flex justify-between"><dt className="text-muted-foreground">Client pays</dt><dd className="font-semibold">$1,000</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Giggle fee (10%)</dt><dd className="font-semibold">−$100</dd></div>
              <div className="flex justify-between border-t border-border pt-4 text-lg"><dt className="font-semibold">Freelancer receives</dt><dd className="font-bold text-primary">$900</dd></div>
            </dl>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MessageSquare className="h-4 w-4" /> No subscriptions or hidden charges.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-85">
            Post a project in minutes, or create a profile and start finding work.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/post-job">Post a project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="/signup">Become a freelancer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
