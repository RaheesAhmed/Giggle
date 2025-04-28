"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  // Since we're only using light theme, this component will just set the theme to light
  // But we've updated the icon to match our branding
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme("light")}
      className="text-primary hover:text-accent transition-colors"
    >
      <Sparkles className="h-5 w-5" />
      <span className="sr-only">Giggle Theme</span>
    </Button>
  )
}
