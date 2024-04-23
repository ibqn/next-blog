import type { FrontMatter } from "@/mdx-utils"
import { format, parseISO } from "date-fns"
import Link from "next/link"
import type { ReadTimeResults } from "reading-time"
import { slug as sluggify } from "github-slugger"

type Props = {
  postMetadata: FrontMatter
  readingTime: ReadTimeResults
  viewCount: number | null
}

export const BlogDetails = ({
  postMetadata,
  readingTime,
  viewCount,
}: Props) => {
  const { publishedAt, tags } = postMetadata

  const tag = tags[0]

  return (
    <div className="mx-10 flex flex-row flex-wrap items-center justify-around gap-3 rounded-lg bg-accent px-10 py-4 text-xl font-medium text-light">
      <time>{format(parseISO(publishedAt), "MMMM dd, yyyy")}</time>
      {viewCount !== null && <span>{viewCount} Views</span>}
      <div>{readingTime.text}</div>
      <Link href={`/category/${sluggify(tag)}`}>#{tag}</Link>
    </div>
  )
}
