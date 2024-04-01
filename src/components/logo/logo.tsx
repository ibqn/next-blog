import Link from "next/link"
import profileImage from "./profile-img.png"
import Image from "next/image"

type Props = {}

export const Logo = (props: Props) => {
  return (
    <Link href="/" className="text-dark flex items-center gap-4">
      <div className="border-dark w-16 overflow-hidden rounded-full border border-solid">
        <Image
          className="h-auto w-full rounded-full"
          src={profileImage}
          alt="Logo"
        />
      </div>
      <span className="text-xl font-bold">Next Blog</span>
    </Link>
  )
}
