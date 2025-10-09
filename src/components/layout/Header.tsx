// Minimal brand header. Theme toggle can be added later.
import { Brain } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span>DocuMind</span>
          <Brain className="size-4" />
        </div>
        {/* Right side reserved for ThemeToggle / Docs later */}
        <div />
      </div>
    </header>
  );
}
