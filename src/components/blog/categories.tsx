import { Category } from "@/components/elements"
import { slug } from "github-slugger"

type Props = {
  categories: string[]
  currentCategory: string
}

export const Categories = ({ categories, currentCategory }: Props) => {
  return (
    <div className="mx-10 mt-10 flex flex-wrap items-start gap-2 border-b-2 border-t-2 border-solid border-dark px-20 py-4 font-medium">
      {categories.map((category) => {
        const categorySlug = slug(category.toLowerCase())
        const link = `/category/${categorySlug}`
        const isActive = currentCategory.toLowerCase() === categorySlug

        return (
          <Category
            key={category}
            link={link}
            category={`#${category}`}
            isActive={isActive}
          />
        )
      })}
    </div>
  )
}
