import { FrontMatter } from "@/utils"
import Image from "next/image"

type Props = {
  latestPostMetadata: FrontMatter
}

export const CoverSection = (props: Props) => {
  const { latestPostMetadata } = props
  return (
    <div className="w-full">
      <article className="relative mx-10 flex h-[85vh] flex-col items-start justify-end">
        <Image
          src={latestPostMetadata.image}
          alt="Cover Image"
          fill
          className="h-full w-full rounded-3xl object-cover object-center"
        />
        <div className="absolute inset-0 h-full rounded-3xl bg-gradient-to-b from-transparent from-0% to-dark"></div>
      </article>
    </div>
  )
}
