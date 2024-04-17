import { type TableOfContents } from "@/mdx-utils"
import { cn } from "@/utils"

type Props = {
  toc: TableOfContents[]
}

export const BlogToc = ({ toc }: Props) => {
  const levelVariants: Record<number, string> = {
    2: "border-t pl-0 pt-2 font-semibold",
    3: "pl-4 sm:pl-4",
    4: "pl-6 sm:pl-6 text-sm",
  }

  return (
    <details
      open
      className="sticky top-6 overflow-hidden overflow-y-auto rounded-lg border border-solid border-dark p-4 text-dark dark:border-light dark:text-light"
    >
      <summary className="cursor-pointer text-lg font-semibold capitalize">
        Table Of Content
      </summary>

      <ul className="mt-4 font-inter text-base">
        {toc.map((item) => {
          return (
            <li key={item.slugTitle} className="py-1">
              <a
                href={`#${item.slugTitle}`}
                className={cn(
                  "flex items-center border-solid border-dark/40",
                  levelVariants[item.level]
                )}
              >
                <span className="hover:underline">{item.title}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </details>
  )
}
