import { type FrontMatter } from "@/utils"
import Image from "next/image"
import Link from "next/link"
import { Tag } from "@/components/elements"
import { format } from "date-fns"

type Props = {
  featuredPostMetadata: FrontMatter
}

export const BlogLayoutTwo = ({ featuredPostMetadata }: Props) => {
  const { slug, image, title, tags } = featuredPostMetadata

  const tag = tags[0]

  return (
    <div className="grid grid-cols-12 items-center gap-4 text-dark">
      <Link
        href={`/blog/${slug}`}
        className="col-span-4 h-full overflow-hidden rounded-xl"
      >
        <Image
          src={image}
          width={1200}
          height={1200}
          alt={title}
          className="aspect-square h-full w-full object-cover object-center"
        />
      </Link>

      <div className="col-span-8 w-full">
        <Tag
          link={`/category/${tag}`}
          tag={tag}
          className="border-none bg-inherit px-0 text-sm font-semibold uppercase text-accent"
        />

        <Link href={`/blog/${slug}`} className="my-1">
          <h2 className="text-lg font-semibold capitalize">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_6px]">
              {title}
            </span>
          </h2>
        </Link>

        <span className="text-base font-semibold capitalize text-dark/50">
          {format(new Date(featuredPostMetadata.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  )
}
