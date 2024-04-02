type BlogProps = { params: { slug: string } }

export default async function BlogPage({ params }: BlogProps) {
  return <div>My Post: {params.slug}</div>
}
