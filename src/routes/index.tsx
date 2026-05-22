import { createFileRoute, Link } from "@tanstack/react-router";
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
import image from "@/assets/image.png";
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
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useApp } from "@/contexts/AppContext";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t } = useApp();

  const team = [
    { name: "Sripadh Sujith", role: "Founder & CEO", img: team1 },
    { name: "Edouard Cheev", role: "Co-founder & CTO", img: team2 },
    { name: "Subrahmanyam csm", role: "Head of Growth", img: team5 },
    { name: "Ginga", role: "Lead AI Researcher", img: team4 },
    { name: "Ruzindana Tehila", role: "Head of Design", img: team3 },
  ];

  const agents = [
    { icon: <Search className="h-5 w-5" />, title: t("aResearchT"), description: t("aResearchD") },
    { icon: <PenTool className="h-5 w-5" />, title: t("aCreativeT"), description: t("aCreativeD") },
    { icon: <Megaphone className="h-5 w-5" />, title: t("aAdsT"), description: t("aAdsD") },
    { icon: <Globe className="h-5 w-5" />, title: t("aSeoT"), description: t("aSeoD") },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: t("aAnalyticsT"),
      description: t("aAnalyticsD"),
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      title: t("aOrchestratorT"),
      description: t("aOrchestratorD"),
    },
  ];

  const principles = [
    { icon: <Bot className="h-5 w-5" />, title: t("pMultiT"), description: t("pMultiD") },
    { icon: <Sparkles className="h-5 w-5" />, title: t("pLearnT"), description: t("pLearnD") },
    { icon: <ShieldCheck className="h-5 w-5" />, title: t("pHumanT"), description: t("pHumanD") },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Hexagonal molecular backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[1400px] bg-cover bg-center opacity-60 mix-blend-multiply dark:opacity-30 dark:mix-blend-screen"
        style={{ backgroundImage: `url(${hexBg})` }}
      />
      {/* Pluto AI Logo Backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 flex h-[600px] items-center justify-center opacity-20 mix-blend-multiply dark:opacity-10 dark:mix-blend-screen"
      >
        <img src={logo} alt="" className="h-96 w-auto" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[1100px]"
        style={{ background: "var(--gradient-page)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[1100px] dark:block hidden"
        style={{ background: "var(--gradient-page-dark)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[1100px] h-[400px] bg-gradient-to-b from-transparent to-background"
      />

      {/* Top nav */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Pluto AI" className="h-8 w-auto" />
        </a>
        <nav className="flex items-center gap-3 sm:gap-5 text-sm font-medium text-muted-foreground">
          <a href="#agents" className="hidden transition hover:text-foreground sm:inline">
            {t("navAgents")}
          </a>
          <a href="#mission" className="hidden transition hover:text-foreground sm:inline">
            {t("navMission")}
          </a>
          <a href="#team" className="hidden transition hover:text-foreground sm:inline">
            {t("navTeam")}
          </a>
          <span className="hidden text-xs text-muted-foreground/70 lg:inline">
            {t("whitepaper")}
          </span>
          <LanguageToggle />
          <ThemeToggle />
        </nav>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-10 text-center sm:pt-16">
        <div className="mb-6 flex justify-center">
          <div className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-pill)] ring-4 ring-background flex items-center justify-center">
            <img src={image} alt="Pluto Planet" className="h-8 w-8 rounded-full object-cover" />
          </div>
        </div>

        <div className="mb-5 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          {t("beta")}
        </div>

        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {t("heroTitle1")}
          <br />
          {t("heroTitle2")}{" "}
          <span className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
            {t("heroAccent")}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t("heroSub")}
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
            {t("joinedBy")} <span className="font-semibold text-foreground">1000+</span>{" "}
            {t("joinedSuffix")}
          </p>
        </div>

        {/* Highlight cards — properly spaced & aligned */}
        <div className="mx-auto mt-24 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3">
          <HighlightCard
            icon={<Zap className="h-5 w-5" />}
            title={t("hSmartTitle")}
            description={t("hSmartDesc")}
          />
          <HighlightCard
            icon={<LineChart className="h-5 w-5" />}
            title={t("hInsightsTitle")}
            description={t("hInsightsDesc")}
          />
          <HighlightCard
            icon={<Users className="h-5 w-5" />}
            title={t("hMultiTitle")}
            description={t("hMultiDesc")}
          />
        </div>
      </section>

      {/* AGENTS */}
      <section id="agents" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            {t("agentStack")}
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("agentTitle1")}{" "}
            <span className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
              {t("agentTitle2")}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t("agentSub")}
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((a) => (
            <HighlightCard
              key={a.title}
              icon={a.icon}
              title={a.title}
              description={a.description}
            />
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="relative z-10 mx-auto max-w-3xl px-6 pb-24">
        <div className="relative pt-8">
          <div className="rounded-3xl border border-border/60 bg-card/80 p-8 shadow-[var(--shadow-card-lg)] backdrop-blur-md sm:p-12">
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              {t("missionTag")}
            </span>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t("missionTitle")}
            </h2>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>{t("missionP1")}</p>
              <p>{t("missionP2")}</p>
            </div>

            <dl className="mt-8 space-y-2 text-sm text-foreground/90">
              <div className="flex gap-2">
                <dt className="font-semibold">{t("launchDate")}</dt>
                <dd className="text-muted-foreground">{t("launchDateV")}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold">{t("keyBenefit")}</dt>
                <dd className="text-muted-foreground">{t("keyBenefitV")}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold">{t("builtFor")}</dt>
                <dd className="text-muted-foreground">{t("builtForV")}</dd>
              </div>
            </dl>
          </div>
          {/* Floating icon — sits in front of the card */}
          <div className="pointer-events-none absolute right-6 top-0 z-20 sm:right-8">
            <FloatingIcon className="h-14 w-14">
              <Brain className="h-6 w-6" />
            </FloatingIcon>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-24">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            {t("howWeBuild")}
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("principlesTitle")}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3">
          {principles.map((p) => (
            <HighlightCard
              key={p.title}
              icon={p.icon}
              title={p.title}
              description={p.description}
            />
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="relative z-10 mx-auto max-w-6xl px-6 pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            {t("teamTag")}
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("teamTitle1")}{" "}
            <span className="italic font-normal" style={{ fontFamily: "var(--font-serif)" }}>
              {t("teamTitle2")}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t("teamSub")}
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
          {t("ctaTitle")}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">{t("ctaSub")}</p>
        <div className="mt-8">
          <WaitlistForm />
        </div>
        <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
          <Target className="h-3.5 w-3.5" /> {t("ctaLimited")}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/60 bg-background/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Pluto AI" className="h-6 w-auto" />
          </div>
          <p className="text-xs text-muted-foreground">{t("footer")}</p>
        </div>
      </footer>
    </main>
  );
}
