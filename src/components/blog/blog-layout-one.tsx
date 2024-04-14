import Image from "next/image"
import { Tag } from "@/components/elements"
import Link from "next/link"
import { type FrontMatter } from "@/utils"

type Props = {
  postMetadata: FrontMatter
}

export const BlogLayoutOne = ({ postMetadata }: Props) => {
  const { title, image, tags, slug } = postMetadata
  const tag = tags[0]

  return (
    <div className="group relative flex-1 overflow-hidden rounded-3xl">
      <Image
        src={image}
        alt={title}
        fill
        className="object-fill object-center transition-all duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 h-full rounded-3xl bg-gradient-to-b from-transparent from-0% to-dark/90"></div>

      <div className="absolute bottom-0 p-10">
        <Tag
          link={`/category/${tag}`}
          tag={tag}
          className="border px-6 py-2 text-sm"
        />

        <Link href={`/blog/${slug}`}>
          <h1 className="mt-4 text-2xl font-bold capitalize text-light">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_6px]">
              {title}
            </span>
          </h1>
        </Link>
      </div>
    </div>
  )
}
