import type { FrontMatter } from "@/mdx-utils"
import Image from "next/image"
import { Tag } from "@/components/elements"
import Link from "next/link"
import { slug as sluggify } from "github-slugger"

type Props = {
  latestPostMetadata: FrontMatter
}

export const CoverSection = async (props: Props) => {
  const { latestPostMetadata } = props
  const { title, description, tags, slug, image } = latestPostMetadata
  const tag = tags[0]

  return (
    <div className="w-full">
      <article className="relative mx-10 flex h-[85vh] flex-col items-start justify-end">
        <Image
          src={image}
          alt="Cover Image"
          fill
          className="h-full w-full rounded-3xl object-cover object-center"
        />
        <div className="absolute inset-0 h-full rounded-3xl bg-gradient-to-b from-transparent from-0% to-dark/90"></div>

        <div className="z-10 flex w-3/4 flex-col items-start justify-center p-16 text-light">
          <Tag link={`/category/${sluggify(tag)}`} tag={tag} />

          <Link href={`/blog/${slug}`} className="mt-6">
            <h1 className="text-4xl font-bold capitalize">
              <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_6px]">
                {title}
              </span>
            </h1>
          </Link>

          <p className="mt-4 font-inter text-xl">{description}</p>
        </div>
      </article>
    </div>
  )
}
