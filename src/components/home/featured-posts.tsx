import { type FrontMatter } from "@/mdx-utils"
import { BlogLayoutOne, BlogLayoutTwo } from "@/components/blog"
import assert from "assert"

type Props = {
  featuredPostsMetadata: FrontMatter[]
}

export const FeaturedPosts = ({ featuredPostsMetadata }: Props) => {
  // console.log("featuredPostsMetadata", featuredPostsMetadata)
  assert(featuredPostsMetadata.length === 3, "Featured posts must have 3 items")

  return (
    <section className="mt-32 flex w-full flex-col items-center justify-center px-10">
      <h2 className="w-full text-4xl font-bold capitalize">Featured Posts</h2>

      <div className="mt-16 grid grid-cols-2 grid-rows-2 gap-6">
        <article className="col-span-1 row-span-2 flex">
          <BlogLayoutOne postMetadata={featuredPostsMetadata[0]} />
        </article>
        <article className="col-span-1 row-span-1">
          <BlogLayoutTwo postMetadata={featuredPostsMetadata[1]} />
        </article>
        <article className="col-span-1 row-span-1">
          <BlogLayoutTwo postMetadata={featuredPostsMetadata[2]} />
        </article>
      </div>
    </section>
  )
}
