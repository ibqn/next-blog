"use client"

import { useTheme } from "next-themes"
import { SunIcon } from "@/components/icons"

type Props = {}

export const ThemeSwitch = (props: Props) => {
  const { theme, setTheme } = useTheme()

  return (
    <button>
      <SunIcon className="h-6 w-6" />
    </button>
  )
}
