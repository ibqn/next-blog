import { ContactForm } from "@/components/contact"
import { siteMetadata } from "@/utils"

type ContactProps = {}

export const metadata = {
  title: "Contact Me",
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}.`,
}

export default async function ContactPage(props: ContactProps) {
  return (
    <section className="mx-10 flex h-[75vh] flex-row items-center justify-center border-b-2 border-solid border-dark text-dark">
      <div className="flex h-full flex-2 border-r-2 border-solid border-dark">
        image
      </div>

      <div className="flex flex-3 flex-col items-start justify-center px-16 pb-8">
        <h2 className="text-4xl font-bold capitalize">Let&apos;s connect!</h2>

        <ContactForm />
      </div>
    </section>
  )
}
