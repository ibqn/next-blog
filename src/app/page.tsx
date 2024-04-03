import { getPostSlugs } from "@/utils"

export default async function Home() {
  const postSlugs = getPostSlugs()

  console.log("postSlugs", postSlugs)

  return (
    <main className="flex flex-col items-center justify-between">main</main>
  )
}
