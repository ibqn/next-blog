import { FrontMatter, POSTS_PATH } from "@/utils"
import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"

type BlogProps = { params: { slug: string } }

const components = {
  Image: () => <div className="bg-red-500">IMAGE</div>,
}

export default async function BlogPage({ params }: BlogProps) {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}`, `index.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, frontmatter } = await compileMDX<FrontMatter>({
    source,
    options: { parseFrontmatter: true },
    components,
  })

  return (
    <div>
      <div>Slug: {params.slug}</div>
      <div>Title: {frontmatter.title}</div>

      {content}
    </div>
  )
}
