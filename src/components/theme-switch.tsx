"use client"

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@/components/icons"
import { useEffect, useState } from "react"

type Props = {}

export const ThemeSwitch = (props: Props) => {
  const [isClient, setIsClient] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsClient(true)
  }, [])

  // console.log("theme", theme)

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!isClient) {
    return null
  }

  return (
    <button onClick={switchTheme}>
      {theme === "light" ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  )
}
