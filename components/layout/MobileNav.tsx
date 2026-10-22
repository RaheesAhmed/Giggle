"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/components/layout/nav-links";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 p-6">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <nav className="mt-8 flex flex-col gap-1">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-6 flex flex-col gap-3 px-1">
          <SheetClose asChild>
            <Button asChild variant="outline" size="lg">
              <Link href="/login">Log in</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild size="lg">
              <Link href="/signup">Sign up free</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
