import { FeaturedPosts, CoverSection, RecentPosts } from "@/components/home"
import { getAllPostsMetadata, getPostSlugs, sortPostsMetadata } from "@/utils"

export default async function Home() {
  const postSlugs = getPostSlugs()

  const postMetadata = await getAllPostsMetadata()
  const sortedPostMetadata = sortPostsMetadata(postMetadata)
  const [latestPostMetadata] = sortedPostMetadata.slice(0, 1)
  const featuredPostsMetadata = sortedPostMetadata.slice(1, 4)
  const recentPostsMetadata = sortedPostMetadata.slice(4, 10)

  // console.log("postSlugs", postSlugs)

  return (
    <main className="flex flex-col items-center">
      <CoverSection latestPostMetadata={latestPostMetadata} />
      <FeaturedPosts featuredPostsMetadata={featuredPostsMetadata} />
      <RecentPosts recentPostsMetadata={recentPostsMetadata} />
    </main>
  )
}
