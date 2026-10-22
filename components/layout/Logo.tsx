import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-violet-500 font-mono text-sm font-bold text-primary-foreground shadow-sm shadow-primary/30">
        {"</>"}
      </span>
      <span className="text-xl font-extrabold tracking-tight text-foreground">
        Giggle<span className="text-highlight">.</span>
      </span>
    </Link>
  );
}
