import { cn } from "@/utils"

type Props = {}

export const Skills = async (props: Props) => {
  const skillList = [
    "next.js",
    "tailwind css",
    "figma",
    "javaScript",
    "web design",
    "typescript",
    "strapi",
    "firebase",
    "generative AI",
    "wireframing",
    "SEO",
    "framer motion",
    "sanity",
    "react",
    "GraphQL",
    "web development",
    "responsive design",
  ]

  return (
    <section className="mx-10 flex flex-col border-b-2 border-solid border-dark p-20 text-dark">
      <span className=" text-5xl font-bold text-accent">
        I&apos;m comfortable in ...
      </span>

      <ul className="mt-8 flex flex-wrap justify-start gap-x-12 gap-y-6">
        {skillList.map((skill, index) => (
          <li
            key={index}
            className={cn(
              "flex rounded border-2 border-solid border-dark px-12 py-4 text-2xl font-semibold capitalize",
              "cursor-default transition-all duration-200 hover:scale-105"
            )}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
