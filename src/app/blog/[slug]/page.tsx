import {
  type FrontMatter,
  getPostsPath,
  getPostSlugs,
  extractTableOfContents,
  getPostMetadata,
} from "@/mdx-utils"
import fs from "node:fs"
import path from "node:path"
import { compileMDX } from "next-mdx-remote/rsc"
import { Tag } from "@/components/elements"
import Image from "next/image"
import { BlogDetails, BlogToc } from "@/components/blog"
import estimateReadingTime from "reading-time"
import { cn, siteMetadata } from "@/utils"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import { type ComponentProps } from "react"
import { slug as sluggify } from "github-slugger"
import { getViewCount } from "@/redis-utils"
import { Metadata, ResolvingMetadata } from "next"
import { format, parseISO } from "date-fns"
import { notFound } from "next/navigation"

type BlogProps = { params: { slug: string } }

const components = {
  // eslint-disable-next-line jsx-a11y/alt-text
  Image: (props: ComponentProps<typeof Image>) => <Image {...props} />,
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata(
  { params }: BlogProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent

  let postMetadata
  try {
    postMetadata = await getPostMetadata(params.slug)
  } catch (error) {
    console.error("metadata error", error)

    return {
      title: "Post not found",
      description: "The post you are looking for does not exist.",
      openGraph: {
        title: "Post not found",
        description: "The post you are looking for does not exist.",
        url: `${siteMetadata.siteUrl}/blog/${params.slug}`,
        siteName: siteMetadata.title,
        locale: siteMetadata.locale,
        type: "article",
        images: [siteMetadata.socialBanner],
      },
    }
  }

  const publishedAt = format(
    parseISO(postMetadata.publishedAt),
    "MMMM dd, yyyy"
  )
  const modifiedAt = format(
    parseISO(postMetadata.updatedAt ?? postMetadata.publishedAt),
    "MMMM dd, yyyy"
  )

  return {
    title: postMetadata.title,
    description: postMetadata.description,
    openGraph: {
      title: postMetadata.title,
      description: postMetadata.description,
      url: `${siteMetadata.siteUrl}/blog/${params.slug}`,
      siteName: siteMetadata.title,
      locale: siteMetadata.locale,
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: [
        ...(postMetadata.image ? [postMetadata.image] : []),
        ...(parentMetadata.openGraph?.images ?? []),
      ],
      authors: [postMetadata.author ?? siteMetadata.author],
    },
  }
}

export default async function BlogPage({ params }: BlogProps) {
  let source
  try {
    const postFilePath = path.join(
      getPostsPath(),
      `${params.slug}`,
      `index.mdx`
    )
    source = fs.readFileSync(postFilePath)
  } catch (error) {
    console.error("post not found error", error)
    notFound()
  }

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

  const viewCount = await getViewCount(params.slug)

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

      <BlogDetails
        postMetadata={frontmatter}
        readingTime={readingTime}
        viewCount={viewCount}
      />

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
