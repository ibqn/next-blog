import { cn } from "@/utils"
import Link from "next/link"
import { type ComponentProps } from "react"

type Props = {
  category: string
  link: string
  isActive: boolean
} & ComponentProps<"a">

export const Category = ({
  category,
  link,
  isActive,
  className,
  ...props
}: Props) => {
  return (
    <Link
      {...props}
      href={link}
      className={cn(
        "m-2 inline-block rounded-full border border-solid border-dark px-10 py-2 capitalize",
        "transition-all duration-200 hover:scale-105",
        isActive ? "bg-dark text-light" : "bg-light text-dark",
        className
      )}
    >
      {category}
    </Link>
  )
}
