import "server-only"

import { compileMDX } from "next-mdx-remote/rsc"
import { compareDesc, parseISO } from "date-fns"
import fs from "node:fs"
import path from "node:path"
import { slug as sluggify } from "github-slugger"

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

export const getPostsPath = () => path.join(process.cwd(), "src", "content")

export const getPostFilePaths = () =>
  fs.readdirSync(getPostsPath()).filter((path) => /\.mdx?$/.test(path))

export const getPostSlugs = () =>
  fs.readdirSync(getPostsPath()).filter((file) => {
    // console.log("file", file)

    if (!fs.statSync(path.join(getPostsPath(), file)).isDirectory()) {
      return false
    }
    const postFilePath = path.join(getPostsPath(), file, `index.mdx`)
    return fs.statSync(postFilePath).isFile()
  })

export const getPostMetadata = async (slug: string) => {
  const postFilePath = path.join(getPostsPath(), slug, `index.mdx`)
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

export const getAllCategories = async () => {
  const metadata = await getAllPostsMetadata()
  const categories = metadata.flatMap((post) => post.tags)

  return ["all"].concat(Array.from(new Set(categories)).sort())
}

export const getPostsMetadataByCategory = async (category: string) => {
  const metadata = await getAllPostsMetadata()

  if (category === "all") {
    return metadata
  }

  return metadata.filter((post) =>
    post.tags
      .map((tag) => sluggify(tag).toLowerCase())
      .includes(category.toLowerCase())
  )
}

export const sortPostsMetadata = (postMetadata: FrontMatter[]) => {
  return postMetadata
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    )
}

export type TableOfContents = {
  level: number
  title?: string
  slugTitle?: string
}

export const extractTableOfContents = (source: string): TableOfContents[] => {
  const headings = source.matchAll(/\n(?<flag>#{1,6})\s+(?<title>.+)/g)

  return Array.from(headings).map(({ groups }) => {
    const { flag, title } = groups ?? {}

    const level = flag?.length ?? 0
    const slugTitle = title ? sluggify(title) : undefined

    return { level, title, slugTitle }
  })
}
