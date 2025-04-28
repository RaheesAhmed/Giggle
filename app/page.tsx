import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, ShieldCheck, Star, DollarSign, Clock, Globe, Award, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4 md:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
                10% Fees vs Fiverr's 20% — Keep More of What You Earn
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Freelance Revolution</span>
                <br />Without the High Fees
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8">
                Giggle connects exceptional talent with amazing projects at half the commission.
                Why settle for less when you can earn more?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 py-6 text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  <Link href="/browse">Find Talent</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary rounded-xl px-8 py-6 text-lg">
                  <Link href="/post-job">Post a Job</Link>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-foreground/70">
                  <span className="font-bold text-primary">10,000+</span> freelancers already earning more
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-border/50 transform rotate-1 z-20">
                <div className="absolute -top-3 -right-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Web Development</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs ml-1 text-foreground/70">(128)</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 mb-4">
                  I'll create a responsive website with modern design and optimal performance.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">$150</span>
                  <Button size="sm" className="bg-primary text-white">View Details</Button>
                </div>
              </div>

              <div className="absolute top-20 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-border/50 transform -rotate-2 z-10 max-w-[250px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Logo Design</h3>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-foreground/80 mb-3">
                  Professional logo design with unlimited revisions.
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">$75</span>
                  <Button size="sm" variant="outline" className="text-xs py-1 h-7">View</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-accent/5 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">10%</p>
              <p className="text-sm text-foreground/70">Platform Fee</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">24hr</p>
              <p className="text-sm text-foreground/70">Avg. Response Time</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">10k+</p>
              <p className="text-sm text-foreground/70">Freelancers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">50k+</p>
              <p className="text-sm text-foreground/70">Completed Jobs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Freelancers <span className="text-primary">Choose Giggle</span> Over Fiverr</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We're building the platform we always wanted as freelancers - fair fees, better tools, and a community that values your work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <DollarSign className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">Half the Fees of Fiverr</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Keep 90% of what you earn with our industry-leading 10% service fee, compared to Fiverr's 20%. That's thousands more in your pocket each year.
              </CardContent>
            </Card>

            <Card className="bg-card border-border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-3 rounded-full bg-accent/10 text-accent">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">Faster Payments</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Get paid within 24 hours of job completion, not 14 days. Your hard work deserves prompt compensation, not delayed gratification.
              </CardContent>
            </Card>

            <Card className="bg-card border-border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="p-3 rounded-full bg-green-500/10 text-green-600">
                  <Globe className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">Global Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Connect with clients worldwide without restrictive tier systems or arbitrary limitations. Your talent deserves a global audience.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Giggle <span className="text-accent">Outperforms</span> the Competition</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A side-by-side comparison that shows why more freelancers and clients are making the switch.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Giggle</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span><strong>10% fee</strong> - Keep more of what you earn</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span><strong>24-hour payments</strong> - Get paid quickly</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span><strong>No tier restrictions</strong> - Equal opportunity for all</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span><strong>Modern platform</strong> - Built for today's freelancers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span><strong>Transparent pricing</strong> - No hidden fees</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 rounded-2xl shadow-lg p-8 border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gray-100 rounded-full">
                  <Award className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-400">Competitors</h3>
              </div>

              <ul className="space-y-4 text-foreground/70">
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span><strong>20% fee</strong> - A significant cut of your earnings</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span><strong>14-day payment holds</strong> - Wait weeks to get paid</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span><strong>Restrictive tier system</strong> - Limited until you "prove yourself"</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span><strong>Dated interface</strong> - Clunky user experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <span><strong>Hidden costs</strong> - Extra fees for basic features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 z-0"></div>
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Ready to Earn What You're <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Really Worth?</span></h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
            Join thousands of freelancers who've already discovered the Giggle advantage.
            More earnings, faster payments, better opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl px-10 py-7 text-lg shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all">
              <Link href="/signup">Sign Up Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary rounded-xl px-10 py-7 text-lg">
              <Link href="/browse">Explore Services</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-foreground/60">
            No credit card required. Start earning more in minutes.
          </p>
        </div>
      </section>
    </div>
  );
}
