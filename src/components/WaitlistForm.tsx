import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

const API_BASE = import.meta.env.VITE_API_BASE_URL || (typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:5002' : 'https://pluto-ai-waitlist.onrender.com');

export function WaitlistForm() {
  const { t, joinedWaitlist, setJoinedWaitlist } = useApp();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || trimmed.length > 255) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE}/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await response.json();

      if (response.ok) {
        setJoinedWaitlist(true);
      } else {
        setError(data.error || "Failed to join waitlist. Please try again.");
      }
    } catch {
      setError("Cannot connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  if (joinedWaitlist) {
    return (
      <div className="mx-auto flex w-full max-w-md items-center gap-1 rounded-full border border-border/60 bg-card/80 p-1.5 shadow-[var(--shadow-float)] backdrop-blur-md">
        <div className="flex-1 px-5 py-2.5 text-sm text-foreground">You're on the waitlist!</div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-success px-5 py-2.5 text-sm font-medium text-success-foreground">
          <Check className="h-4 w-4" /> Joined
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-3">
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-1 rounded-full border border-border/60 bg-card/80 p-1.5 shadow-[var(--shadow-float)] backdrop-blur-md"
      >
        <input
          type="email"
          required
          maxLength={255}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("emailPlaceholder")}
          aria-label="Email address"
          className="flex-1 bg-transparent px-5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Joining...
            </>
          ) : (
            <>
              {t("joinWaitlist")}
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
      {error && (
        <div className="text-center text-sm text-destructive">{error}</div>
      )}
    </div>
  );
}
