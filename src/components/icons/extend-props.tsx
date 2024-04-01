import { cn } from "@/utils"
import { ComponentProps } from "react"

export type IconProps = ComponentProps<"svg">

export const extendIconProps = ({ className, ...props }: IconProps) => ({
  ...props,
  className: cn(
    "ease h-6 w-6 transition-all duration-200 hover:scale-125",
    className
  ),
})
