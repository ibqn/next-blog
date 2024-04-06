import Image from "next/image"
import { Tag } from "../elements"
import Link from "next/link"
import { type FrontMatter } from "@/utils"

type Props = {
  featuredPostMetadata: FrontMatter
}

export const BlogLayoutOne = ({ featuredPostMetadata }: Props) => {
  const { title, description, image, tags, slug } = featuredPostMetadata
  const tag = tags[0]

  return (
    <div className="overflow-hidden rounded-xl">
      <Image
        src={image}
        alt="Cover Image"
        fill
        className="h-full w-full rounded-3xl object-cover object-center"
      />
      <div className="absolute inset-0 h-full rounded-3xl bg-gradient-to-b from-transparent from-0% to-dark/90"></div>

      <div className="z-10 flex w-3/4 flex-col items-start justify-center p-16 text-light">
        <Tag link={`/category/${tag}`} tag={tag} />

        <Link href={`/blog/${slug}`} className="mt-6">
          <h1 className="text-4xl font-bold capitalize">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_6px]">
              {title}
            </span>
          </h1>
        </Link>

        <p className="mt-4 font-inter text-xl">{description}</p>
      </div>
    </div>
  )
}
