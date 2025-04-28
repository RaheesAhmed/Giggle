import Link from "next/link";
import { Sparkles, Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
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
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Connecting exceptional talent with amazing projects at half the commission. The smarter freelance marketplace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* For Clients */}
          <div>
            <h3 className="font-bold text-foreground mb-4">For Clients</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/browse" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Find Freelancers
                </Link>
              </li>
              <li>
                <Link href="/post-job" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* For Freelancers */}
          <div>
            <h3 className="font-bold text-foreground mb-4">For Freelancers</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/find-work" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Find Work
                </Link>
              </li>
              <li>
                <Link href="/create-profile" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link href="/freelancer-resources" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/freelancer-stories" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for tips, new features, and updates.
            </p>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 h-10 px-3 rounded-l-lg bg-secondary/80 border-border/50 border focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm"
              />
              <Button className="rounded-l-none bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@giggle.com</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>+ (92) 315-5501381</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Abbottab Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border/50 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Giggle. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
            <Link href="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}