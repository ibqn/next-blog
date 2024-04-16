"use client"

import { ThemeProvider } from "next-themes"
import { type ReactNode } from "react"

type Props = Readonly<{
  children: ReactNode
}>

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  )
}
