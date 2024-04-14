import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
import { compareDesc, parseISO } from "date-fns"

export type FrontMatter = {
  title: string
  description: string
  image: string
  publishedAt: string
  updatedAt: string
  author: string
  isPublished: boolean
  tags: string[]
  slug: string
}

export const POSTS_PATH = path.join(process.cwd(), "src", "content")

export const getPostFilePaths = () =>
  fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path))

export const getPostSlugs = () =>
  fs.readdirSync(POSTS_PATH).filter((file) => {
    // console.log("file", file)

    if (!fs.statSync(path.join(POSTS_PATH, file)).isDirectory()) {
      return false
    }
    const postFilePath = path.join(POSTS_PATH, file, `index.mdx`)
    return fs.statSync(postFilePath).isFile()
  })

export const getPostMetadata = async (slug: string) => {
  const postFilePath = path.join(POSTS_PATH, slug, `index.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { frontmatter } = await compileMDX<FrontMatter>({
    source,
    options: { parseFrontmatter: true },
  })

  return { ...frontmatter, slug }
}

export const getAllPostsMetadata = async () => {
  const slugs = getPostSlugs()

  const metadata = await Promise.all(
    slugs.map(async (slug) => {
      const postMetadata = await getPostMetadata(slug)
      return postMetadata
    })
  )

  return metadata
}

export const sortPostsMetadata = (postMetadata: FrontMatter[]) => {
  return postMetadata
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    )
}
