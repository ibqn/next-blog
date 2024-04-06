import { FeaturedPosts, CoverSection } from "@/components/home"
import { getAllPostsMetadata, getPostSlugs, sortPostsMetadata } from "@/utils"

export default async function Home() {
  const postSlugs = getPostSlugs()

  const postMetadata = await getAllPostsMetadata()
  const sortedPostMetadata = sortPostsMetadata(postMetadata)
  const [latestPostMetadata] = sortedPostMetadata.slice(0, 1)

  console.log("postSlugs", postSlugs)

  return (
    <main className="flex flex-col items-center justify-between">
      <CoverSection latestPostMetadata={latestPostMetadata} />
      <FeaturedPosts featuredPostsMetadata={sortedPostMetadata} />
    </main>
  )
}
