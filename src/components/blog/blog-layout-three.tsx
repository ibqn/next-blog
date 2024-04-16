import { type FrontMatter } from "@/mdx-utils"
import Image from "next/image"
import Link from "next/link"
import { Tag } from "@/components/elements"
import { format } from "date-fns"

type Props = {
  postMetadata: FrontMatter
}

export const BlogLayoutThree = ({ postMetadata }: Props) => {
  const { slug, image, title, tags, publishedAt } = postMetadata

  const tag = tags[0]

  return (
    <div className="group flex flex-col items-center text-dark">
      <Link
        href={`/blog/${slug}`}
        className=" h-full overflow-hidden rounded-xl"
      >
        <Image
          src={image}
          width={1200}
          height={1200}
          alt={title}
          className="aspect-[4/3] h-full w-full object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-105"
        />
      </Link>

      <div className="mt-4 flex w-full flex-col">
        <Tag
          link={`/category/${tag}`}
          tag={tag}
          className="border-none bg-inherit px-0 text-sm font-semibold uppercase text-accent"
        />

        <Link href={`/blog/${slug}`} className="my-1">
          <h2 className="text-lg font-semibold capitalize">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_6px]">
              {title}
            </span>
          </h2>
        </Link>

        <span className="text-base font-semibold capitalize text-dark/50">
          {format(new Date(publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  )
}
