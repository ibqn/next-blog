"use client"

import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const Providers = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
