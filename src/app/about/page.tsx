import { CoverSection, Skills } from "@/components/about"
import Link from "next/link"
import { Phone } from "lucide-react"

type AboutProps = {}

export const metadata = {
  title: "About Me",
  description: `Here are some details about my self.`,
}

export default async function AboutPage(props: AboutProps) {
  return (
    <>
      <CoverSection />
      <Skills />

      <h2 className="xs:mx-10 mx-5 mt-8 flex items-center gap-2 self-start text-lg font-semibold text-dark dark:font-normal dark:text-light sm:mx-12 md:mx-16 md:text-2xl lg:mx-20">
        <span>Have a project in mind? Reach out to me</span>
        <Phone size={28} />
        <span>from</span>
        <Link href="/contact" className="!underline underline-offset-4">
          here
        </Link>
        <span>and let&apos;s make it happen.</span>
      </h2>
    </>
  )
}
