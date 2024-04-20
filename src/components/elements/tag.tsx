import { cn } from "@/utils"
import Link from "next/link"
import { type ComponentProps } from "react"

type Props = {
  tag: string
  link: string
} & ComponentProps<"a">

export const Tag = ({ tag, link, className, ...props }: Props) => {
  return (
    <Link
      {...props}
      href={link}
      className={cn(
        "inline-flex rounded-full border border-solid border-light bg-dark px-10 py-3 font-semibold capitalize text-light",
        className
      )}
    >
      <span className="transition-all duration-200 hover:scale-105">{tag}</span>
    </Link>
  )
}
