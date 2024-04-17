import type { FrontMatter } from "@/mdx-utils"
import { format, parseISO } from "date-fns"
import Link from "next/link"
import type { ReadTimeResults } from "reading-time"

type Props = {
  postMetadata: FrontMatter
  readingTime: ReadTimeResults
}

export const BlogDetails = ({ postMetadata, readingTime }: Props) => {
  const { publishedAt, tags } = postMetadata

  const tag = tags[0]

  return (
    <div className="mx-10 flex flex-row flex-wrap items-center justify-around gap-3 rounded-lg bg-accent px-10 py-4 text-xl font-medium text-light">
      <time>{format(parseISO(publishedAt), "MMMM dd, yyyy")}</time>
      <span>10 Views</span>
      <div>{readingTime.text}</div>
      <Link href={`/category/${tag}`}>#{tag}</Link>
    </div>
  )
}
