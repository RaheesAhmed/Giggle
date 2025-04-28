import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-background to-secondary">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          Freelance Smarter, Not Harder.
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8">
          Giggle connects top talent with exciting projects, powered by lower fees and a seamless experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-6 text-lg">
            <Link href="/browse">Find Talent</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary rounded-xl px-8 py-6 text-lg">
            <Link href="/post-job">Post a Job</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose Giggle?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card border-border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">Lower Fees, Higher Earnings</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Keep more of what you earn with our industry-leading 10% service fee. More value for freelancers and clients.
            </CardContent>
          </Card>
          <Card className="bg-card border-border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-3 rounded-full bg-accent/10 text-accent">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">Modern & Intuitive UI</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Enjoy a fresh, user-friendly platform designed for seamless navigation and efficient collaboration.
            </CardContent>
          </Card>
          <Card className="bg-card border-border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="p-3 rounded-full bg-green-500/10 text-green-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">Secure & Reliable</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Trustworthy transactions powered by Stripe and robust platform security ensure peace of mind.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-secondary">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Get Started in Minutes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-primary">For Clients</h3>
            <ol className="list-decimal list-inside space-y-2 text-foreground/80">
              <li>Sign up for a free account.</li>
              <li>Post your project details.</li>
              <li>Browse proposals or invite freelancers.</li>
              <li>Hire the perfect match and collaborate.</li>
              <li>Pay securely upon completion.</li>
            </ol>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-accent">For Freelancers</h3>
            <ol className="list-decimal list-inside space-y-2 text-foreground/80">
              <li>Create your professional profile.</li>
              <li>Showcase your skills and services.</li>
              <li>Find projects that match your expertise.</li>
              <li>Submit compelling proposals.</li>
              <li>Get paid quickly with low fees.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-t from-background to-secondary">
        <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Giggle?</h2>
        <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-8">
          Join the growing community of smart freelancers and clients revolutionizing the way work gets done.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl px-8 py-6 text-lg">
          <Link href="/signup">Sign Up Today</Link>
        </Button>
      </section>


    </div>
  );
}
