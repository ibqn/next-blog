import type { FrontMatter } from "@/mdx-utils"
import Link from "next/link"
import { BlogLayoutThree } from "@/components/blog"

type Props = {
  recentPostsMetadata: FrontMatter[]
}

export const RecentPosts = ({ recentPostsMetadata }: Props) => {
  return (
    <section className="mt-32 flex w-full flex-col items-center justify-center px-10">
      <div className="flex w-full flex-row justify-between">
        <h2 className="text-4xl font-bold capitalize">Recent Posts</h2>

        <Link
          href={`/categories/all`}
          className="text-lg font-medium capitalize text-accent underline underline-offset-2"
        >
          view all
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-3 grid-rows-3 gap-16">
        {recentPostsMetadata.map((metadata) => (
          <article key={metadata.slug} className="relative">
            <BlogLayoutThree postMetadata={metadata} />
          </article>
        ))}
      </div>
    </section>
  )
}
