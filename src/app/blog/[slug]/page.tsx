import {
  type FrontMatter,
  getPostsPath,
  getPostSlugs,
  extractTableOfContents,
} from "@/mdx-utils"
import fs from "node:fs"
import path from "node:path"
import { compileMDX } from "next-mdx-remote/rsc"
import { Tag } from "@/components/elements"
import Image from "next/image"
import { BlogDetails, BlogToc } from "@/components/blog"
import estimateReadingTime from "reading-time"
import { cn } from "@/utils"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import { type ComponentProps } from "react"
import { slug as sluggify } from "github-slugger"

type BlogProps = { params: { slug: string } }

const components = {
  Image: (props: ComponentProps<typeof Image>) => <Image {...props} />,
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export default async function BlogPage({ params }: BlogProps) {
  const postFilePath = path.join(getPostsPath(), `${params.slug}`, `index.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, frontmatter } = await compileMDX<FrontMatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "append" }],
          [rehypePrettyCode, { theme: "github-dark", grid: false }],
        ],
      },
    },
    components,
  })

  const { tags, title, image } = frontmatter

  const tag = tags[0]

  const readingTime = estimateReadingTime(source.toString("utf8"))

  const toc = extractTableOfContents(source.toString("utf8"))

  return (
    <article>
      <div className="relative mb-8 h-[70vh] w-full bg-dark text-center">
        <Image
          src={image}
          width={1200}
          height={1200}
          alt={title}
          className="aspect-square h-full w-full object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-dark/60" />

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
          <Tag
            tag={tag}
            link={`/category/${sluggify(tag)}`}
            className="px-6 py-2 text-sm"
          />
          <h1 className="relative mt-6 w-5/6 text-5xl font-semibold capitalize leading-normal text-light">
            {title}
          </h1>
        </div>
      </div>

      <BlogDetails postMetadata={frontmatter} readingTime={readingTime} />

      <div className="mt-8 grid grid-cols-12 gap-16 px-10">
        <div className="col-span-4">
          <BlogToc toc={toc} />
        </div>
        <div
          className={cn(
            "first-letter",
            "prose col-span-8 max-w-max font-inter lg:prose-xl",
            "prose-blockquote:border-accent prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6",
            "prose-blockquote:rounded-r-lg prose-blockquote:not-italic",
            "prose-li:marker:text-accent"
          )}
        >
          {content}
        </div>
      </div>
    </article>
  )
}
