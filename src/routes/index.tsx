import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Brain, Users, Target, Zap, LineChart } from "lucide-react";
import logo from "@/assets/pluto-logo.png";
import clouds from "@/assets/clouds-bg.jpg";
import founder from "@/assets/founder.jpg";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";
import { WaitlistForm } from "@/components/WaitlistForm";
import { HighlightCard } from "@/components/HighlightCard";
import { FloatingIcon } from "@/components/FloatingIcon";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Atmospheric cloud backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${clouds})` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[900px]"
        style={{ background: "var(--gradient-page)" }}
      />

      {/* Top nav */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Pluto AI" className="h-8 w-auto" />
        </a>
        <a
          href="#mission"
          className="hidden text-sm font-medium text-muted-foreground transition hover:text-foreground sm:inline"
        >
          Whitepaper v1.0 · May 2026
        </a>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-10 text-center sm:pt-16">
        {/* Floating logo badge */}
        <div className="mb-6 flex justify-center">
          <FloatingIcon className="h-14 w-14">
            <Sparkles className="h-6 w-6" />
          </FloatingIcon>
        </div>

        <div className="mb-5 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          Beta goes live soon
        </div>

        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Early Access to the
          <br />
          Future of AI{" "}
          <span className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
            Growth
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          A multi-agent growth operating system that researches, creates, launches, and optimizes
          campaigns — all in one place.
        </p>

        <div className="mt-10">
          <WaitlistForm />
        </div>

        {/* Social proof */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {[avatar1, avatar2, avatar3].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                className="h-8 w-8 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <p className="text-sm font-medium text-foreground/80">
            Join <span className="font-semibold text-foreground">8,258+</span> SaaS &amp; AI founders
          </p>
        </div>

        {/* Highlight cards */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <HighlightCard
            icon={<Zap className="h-5 w-5" />}
            title="Smart Automation"
            description="Specialized agents launch and optimize campaigns end-to-end."
          />
          <HighlightCard
            icon={<LineChart className="h-5 w-5" />}
            title="AI Insights"
            description="Unlock data-driven clarity from every channel and touchpoint."
          />
          <HighlightCard
            icon={<Users className="h-5 w-5" />}
            title="Multi-Persona"
            description="Pressure-test ideas with simulated buyers before you spend."
          />
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="relative z-10 mx-auto max-w-3xl px-6 pb-24">
        <div className="relative pt-8">
          <div className="absolute right-8 top-0">
            <FloatingIcon className="h-14 w-14">
              <Brain className="h-6 w-6" />
            </FloatingIcon>
          </div>
          <div className="rounded-3xl border border-border/60 bg-card/70 p-8 shadow-[var(--shadow-card)] backdrop-blur-sm sm:p-12">
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              Mission
            </span>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              The New Era of AI-Powered Growth
            </h2>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Pluto AI puts a coordinated team of agents at the center of your workflow — helping
                you automate repetitive tasks, generate instant insights, and execute campaigns at
                the speed of thought.
              </p>
              <p>
                With faster decisions and seamless integration across research, content, ads, and
                analytics, you scale your business without limits.
              </p>
            </div>

            <dl className="mt-8 space-y-2 text-sm text-foreground/90">
              <div className="flex gap-2">
                <dt className="font-semibold">Launch Date:</dt>
                <dd className="text-muted-foreground">November 2026</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold">Key Benefit:</dt>
                <dd className="text-muted-foreground">A growth team in a box, day one</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold">Built For:</dt>
                <dd className="text-muted-foreground">Founders, agencies &amp; growth teams</dd>
              </div>
            </dl>

            <div className="mt-8 flex items-center gap-3 border-t border-border/60 pt-6">
              <img
                src={founder}
                alt="Founder of Pluto AI"
                loading="lazy"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">Daniel Hayes</p>
                <p className="text-xs text-muted-foreground">Founder, Pluto AI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-3">
          <HighlightCard
            icon={<Target className="h-5 w-5" />}
            title="Mission-driven agents"
            description="Each agent owns a domain — research, creative, ads, SEO — and shares context."
          />
          <HighlightCard
            icon={<Sparkles className="h-5 w-5" />}
            title="Continuous learning"
            description="Every campaign becomes intelligence that improves the next one automatically."
          />
          <HighlightCard
            icon={<Users className="h-5 w-5" />}
            title="Human in control"
            description="Approvals, preferences, and constraints keep your brand and budget safe."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/60 bg-background/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Pluto AI" className="h-6 w-auto" />
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Pluto AI · Building the future growth engine for everyone.
          </p>
        </div>
      </footer>
    </main>
  );
}
