import { BlogLayoutThree, Categories } from "@/components/blog"
import { getAllCategories, getPostsMetadataByCategory } from "@/mdx-utils"
import { slug } from "github-slugger"

type CategoryProps = { params: Promise<{ category: string }> }

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((category) => ({
    category: slug(category),
  }))
}

export async function generateMetadata({ params }: CategoryProps) {
  const { category } = await params

  return {
    title: `${category.replaceAll("-", " ")} Blogs`,
    description: `Learn more about ${category === "all" ? "web development" : category} through our collection of expert blogs and tutorials`,
  }
}

export default async function CategoryPage({ params }: CategoryProps) {
  const categories = await getAllCategories()
  const { category } = await params

  const filteredPostsMetadata = await getPostsMetadataByCategory(category)

  return (
    <article className="text-dark mt-12 flex flex-col">
      <div className="flex flex-col px-32">
        <h1 className="mt-6 text-5xl font-semibold">#{category}</h1>
        <span className="mt-2">Discover more categories and expand your knowledge!</span>
      </div>

      <Categories categories={categories} currentCategory={category} />

      <div className="mx-10 mt-16 grid grid-cols-3 gap-16">
        {filteredPostsMetadata.map((metadata) => (
          <article key={metadata.slug} className="relative col-span-1 row-span-1">
            <BlogLayoutThree postMetadata={metadata} />
          </article>
        ))}
      </div>
    </article>
  )
}
