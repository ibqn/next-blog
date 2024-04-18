import { BlogLayoutThree, Categories } from "@/components/blog"
import { getAllCategories, getPostsMetadataByCategory } from "@/mdx-utils"
import { slug } from "github-slugger"

type CategoryProps = { params: { category: string } }

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((category) => ({
    category: slug(category),
  }))
}

export default async function CategoryPage({ params }: CategoryProps) {
  const categories = await getAllCategories()

  const filteredPostsMetadata = await getPostsMetadataByCategory(
    params.category
  )

  return (
    <article className="mt-12 flex flex-col text-dark">
      <div className="flex flex-col px-32">
        <h1 className="mt-6 text-5xl font-semibold">#{params.category}</h1>
        <span className="mt-2">
          Discover more categories and expand your knowledge!
        </span>
      </div>

      <Categories categories={categories} currentCategory={params.category} />

      <div className="mx-10 mt-16 grid grid-cols-3 gap-16">
        {filteredPostsMetadata.map((metadata) => (
          <article
            key={metadata.slug}
            className="relative col-span-1 row-span-1"
          >
            <BlogLayoutThree postMetadata={metadata} />
          </article>
        ))}
      </div>
    </article>
  )
}
