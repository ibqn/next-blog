import { type FrontMatter } from "@/utils"
import { BlogLayoutOne, BlogLayoutTwo } from "@/components/blog"

type Props = {
  featuredPostsMetadata: FrontMatter[]
}

export const FeaturedPosts = (props: Props) => {
  return (
    <section className="mt-32 flex w-full flex-col items-center justify-center px-32">
      <h2 className="w-full text-4xl font-bold capitalize">Featured Posts</h2>

      <div className="mt-16 grid grid-cols-2 grid-rows-6 gap-6">
        <article className="relative col-span-1 row-span-2">
          <BlogLayoutOne
            featuredPostMetadata={props.featuredPostsMetadata[2]}
          />
        </article>
        <article className="relative col-span-1 row-span-1 bg-yellow-200">
          <BlogLayoutTwo />
        </article>
        <article className="relative col-span-1 row-span-1 bg-rose-200">
          <BlogLayoutTwo />
        </article>
      </div>
    </section>
  )
}
