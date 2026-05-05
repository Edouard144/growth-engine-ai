import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Brain,
  Users,
  Target,
  Zap,
  LineChart,
  Search,
  PenTool,
  Megaphone,
  Globe,
  Bot,
  ShieldCheck,
  Workflow,
  Rocket,
} from "lucide-react";
import logo from "@/assets/pluto-logo.png";
import hexBg from "@/assets/hex-bg.jpg";
import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpg";
import team3 from "@/assets/team3.jpg";
import team4 from "@/assets/team4.jpg";
import team5 from "@/assets/team5.jpg";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";
import { WaitlistForm } from "@/components/WaitlistForm";
import { HighlightCard } from "@/components/HighlightCard";
import { FloatingIcon } from "@/components/FloatingIcon";

export const Route = createFileRoute("/")({
  component: Index,
});

const team = [
  { name: "Daniel Hayes", role: "Founder & CEO", img: team1 },
  { name: "Marcus Chen", role: "Co-founder & CTO", img: team2 },
  { name: "Sofia Almeida", role: "Head of Design", img: team3 },
  { name: "Jonas Weber", role: "Lead AI Researcher", img: team4 },
  { name: "Aiko Tanaka", role: "Head of Growth", img: team5 },
];

const agents = [
  { icon: <Search className="h-5 w-5" />, title: "Research Agent", description: "Scans markets, competitors, and audiences in real time." },
  { icon: <PenTool className="h-5 w-5" />, title: "Creative Agent", description: "Generates on-brand copy, visuals, and campaign concepts." },
  { icon: <Megaphone className="h-5 w-5" />, title: "Ads Agent", description: "Launches and rebalances paid campaigns across channels." },
  { icon: <Globe className="h-5 w-5" />, title: "SEO Agent", description: "Plans, writes, and ranks content for compounding growth." },
  { icon: <LineChart className="h-5 w-5" />, title: "Analytics Agent", description: "Turns raw data into clear, actionable next steps." },
  { icon: <Workflow className="h-5 w-5" />, title: "Orchestrator", description: "Coordinates every agent so work moves without friction." },
];

const principles = [
  { icon: <Bot className="h-5 w-5" />, title: "Multi-agent OS", description: "A coordinated team of specialists, not a single chatbot." },
  { icon: <Sparkles className="h-5 w-5" />, title: "Continuous learning", description: "Every campaign becomes intelligence that improves the next." },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Human in control", description: "Approvals, brand rules, and budget guardrails by default." },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Hexagonal molecular backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[1100px] bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${hexBg})` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[1100px]"
        style={{ background: "var(--gradient-page)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[800px] h-[400px] bg-gradient-to-b from-transparent to-background"
      />

      {/* Top nav */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Pluto AI" className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground sm:flex">
          <a href="#agents" className="transition hover:text-foreground">Agents</a>
          <a href="#mission" className="transition hover:text-foreground">Mission</a>
          <a href="#team" className="transition hover:text-foreground">Team</a>
          <span className="text-xs text-muted-foreground/70">Whitepaper v1.0</span>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-10 text-center sm:pt-16">
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

        {/* Highlight cards — properly spaced & aligned */}
        <div className="mx-auto mt-24 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3">
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

      {/* AGENTS */}
      <section id="agents" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            The Agent Stack
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            One platform.{" "}
            <span className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
              Six specialists.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Each agent owns a domain and shares context with the others — so research, creative,
            ads, SEO, and analytics move as one team.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((a) => (
            <HighlightCard key={a.title} icon={a.icon} title={a.title} description={a.description} />
          ))}
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
          <div className="rounded-3xl border border-border/60 bg-card/80 p-8 shadow-[var(--shadow-card-lg)] backdrop-blur-md sm:p-12">
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
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            How we build
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Principles behind the engine
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3">
          {principles.map((p) => (
            <HighlightCard key={p.title} icon={p.icon} title={p.title} description={p.description} />
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="relative z-10 mx-auto max-w-6xl px-6 pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            Team
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Five operators building{" "}
            <span className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
              Pluto AI
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            A small, senior team from AI research, design, and growth — assembling the operating
            system we always wanted.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((m) => (
            <div
              key={m.name}
              className="group rounded-3xl border border-border/40 bg-card/80 p-5 text-center shadow-[var(--shadow-card-lg)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full ring-4 ring-background shadow-[var(--shadow-pill)]">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-foreground">{m.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-28 text-center">
        <div className="mb-6 flex justify-center">
          <FloatingIcon className="h-14 w-14">
            <Rocket className="h-6 w-6" />
          </FloatingIcon>
        </div>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Be first when Pluto opens.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
          Founding members get early access, lifetime pricing, and a direct line to the team.
        </p>
        <div className="mt-8">
          <WaitlistForm />
        </div>
        <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
          <Target className="h-3.5 w-3.5" /> Limited founding seats — closing at launch.
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
