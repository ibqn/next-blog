import { ContactForm } from "@/components/contact"
import { ContactImage } from "@/components/contact/contact-image"
import { siteMetadata } from "@/utils"

type ContactProps = {}

export const metadata = {
  title: "Contact Me",
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}.`,
}

export default async function ContactPage(props: ContactProps) {
  return (
    <section className="border-dark text-dark mx-10 flex h-[75vh] flex-row items-center justify-center border-b-2 border-solid">
      <div className="border-dark flex h-full flex-1 border-r-2 border-solid p-10 px-20">
        <ContactImage className="h-auto w-full" />
      </div>

      <div className="flex flex-1 flex-col items-start justify-center px-16 pb-8">
        <h2 className="text-4xl font-bold capitalize">Let&apos;s connect!</h2>

        <ContactForm />
      </div>
    </section>
  )
}
