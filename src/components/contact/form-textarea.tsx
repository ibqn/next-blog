import { cn } from "@/utils"
import React, { ComponentProps, forwardRef } from "react"

type Props = ComponentProps<"textarea">
type Ref = HTMLTextAreaElement

export const FormTextarea = forwardRef<Ref, Props>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={cn(
          "mx-2 border-0 border-b border-gray bg-transparent p-0 outline-none placeholder:text-lg focus:border-gray focus:ring-0",
          className
        )}
      />
    )
  }
)

FormTextarea.displayName = "FormTextarea"
