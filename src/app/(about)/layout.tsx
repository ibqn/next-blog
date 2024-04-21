import { Insights } from "@/components/insights"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default async function AboutLayout({ children }: Props) {
  const insights = [
    "20+ Projects Completed",
    "3+ Years of Freelancing",
    "99% Client Satisfaction",
    "20K+ Subscribers",
    "Authored In-Depth Course on Educative",
    "Contributed as a Technical Course Reviewer 📝",
    "Recipient of the Hackernoon Noonies Award 🏆",
  ]

  return (
    <main className="flex w-full flex-col items-center justify-between">
      <Insights insights={insights} />
      {children}
    </main>
  )
}
