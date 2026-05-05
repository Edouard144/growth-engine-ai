import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || trimmed.length > 255) return;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex w-full max-w-md items-center gap-1 rounded-full border border-border/60 bg-card/80 p-1.5 shadow-[var(--shadow-float)] backdrop-blur-md"
    >
      <input
        type="email"
        required
        maxLength={255}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        aria-label="Email address"
        className="flex-1 bg-transparent px-5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
      />
      <button
        type="submit"
        disabled={submitted}
        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-100"
      >
        {submitted ? (
          <>
            <Check className="h-4 w-4" /> You're in
          </>
        ) : (
          <>
            Join Waitlist
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}