import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Search, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 mr-8">
          <div className="flex items-center">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                G
              </div>
              <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-accent" />
            </div>
            <div className="ml-2 font-extrabold text-xl">
              <span className="text-primary">Gig</span>
              <span className="text-accent">gle</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center flex-1">
          {/* Main Nav */}
          <nav className="flex items-center gap-1">
            <Link
              href="/browse"
              className="px-3 py-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors font-medium"
            >
              Browse Jobs
            </Link>
            <Link
              href="/post-job"
              className="px-3 py-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors font-medium"
            >
              Post a Job
            </Link>
            <Link
              href="/freelancers"
              className="px-3 py-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors font-medium"
            >
              Find Freelancers
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="relative mx-4 flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for services..."
                className="w-full h-9 pl-9 pr-4 rounded-full bg-secondary/80 border-border/50 border focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors">
          <Menu className="h-5 w-5" />
        </button>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" className="text-foreground/70 hover:text-primary hover:bg-primary/5">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/30 transition-all">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}