import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* Add your logo here if you have one */}
            <span className="hidden font-bold sm:inline-block">
              Giggle
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/browse"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Browse Jobs
            </Link>
            <Link
              href="/post-job"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Post a Job
            </Link>
            {/* Add more navigation links as needed */}
          </nav>
        </div>
        {/* Add mobile navigation toggle here if needed */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Button asChild variant="ghost" className="text-foreground/60 hover:text-foreground/80">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="ml-2">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}