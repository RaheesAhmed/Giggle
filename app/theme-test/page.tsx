"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sparkles, Palette, Zap, CheckCircle } from "lucide-react"

export default function ThemeTestPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Giggle Theme</h1>
        </div>
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="border-b border-border pb-4">
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              <CardTitle>Brand Identity</CardTitle>
            </div>
            <CardDescription>Unique and modern design system</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Light Theme</Badge>
                <span className="text-sm text-muted-foreground">Current active theme</span>
              </div>
              <p className="text-sm">
                Giggle features a distinctive color palette with vibrant purples and corals,
                creating a fresh and energetic visual identity that stands apart from other platforms.
              </p>
              <div className="flex gap-2">
                <div className="flex items-center gap-1 text-xs bg-secondary rounded-full px-3 py-1">
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                  <span>#6c63ff</span>
                </div>
                <div className="flex items-center gap-1 text-xs bg-secondary rounded-full px-3 py-1">
                  <span className="block w-2 h-2 rounded-full bg-accent"></span>
                  <span>#ff6b6b</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-border pt-4">
            <Button variant="outline" className="mr-2">Secondary</Button>
            <Button>Primary</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="border-b border-border pb-4">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              <CardTitle>Color Palette</CardTitle>
            </div>
            <CardDescription>Distinctive Giggle colors</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-primary"></div>
                  <span>Primary (Purple)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-accent"></div>
                  <span>Accent (Coral)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-secondary"></div>
                  <span>Secondary</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-muted"></div>
                  <span>Muted</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-destructive"></div>
                  <span>Destructive</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-border"></div>
                  <span>Border</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-card"></div>
                  <span>Card</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-background"></div>
                  <span>Background</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-border pt-4 flex justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Original branding</span>
            </div>
            <Badge className="bg-accent hover:bg-accent/90">Giggle Design</Badge>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
