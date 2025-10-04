import { ContactForm } from "@/components/contact"
import { siteMetadata } from "@/utils"
import Image from "next/image"
import contactImage from "@/components/contact/contact-image.svg"

type ContactProps = {}

export const metadata = {
  title: "Contact Me",
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}.`,
}

export default async function ContactPage(props: ContactProps) {
  return (
    <section className="border-dark text-dark mx-10 flex h-[75vh] flex-row items-center justify-center border-b-2 border-solid">
      <div className="border-dark flex h-full flex-2 border-r-2 border-solid">
        <Image alt="Contact Image" src={contactImage} className="h-full w-full object-contain object-center" />
      </div>

      <div className="flex flex-3 flex-col items-start justify-center px-16 pb-8">
        <h2 className="text-4xl font-bold capitalize">Let&apos;s connect!</h2>

        <ContactForm />
      </div>
    </section>
  )
}
