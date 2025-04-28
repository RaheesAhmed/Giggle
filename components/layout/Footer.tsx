import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Giggle. All rights reserved.</p>
        <nav className="flex gap-4 mt-4 md:mt-0">
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/terms" className="hover:text-primary">Terms</Link>
          <Link href="/privacy" className="hover:text-primary">Privacy</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}