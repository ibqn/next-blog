import Link from "next/link"
import { Logo } from "./logo"
import { DribbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "./icons"

type Props = {}

export const Header = (props: Props) => {
  return (
    <header className="flex w-full items-center justify-between p-4 px-10">
      <Logo />

      <nav className="border-dark bg-light/80 fixed right-1/2 top-6 flex w-max translate-x-1/2 items-center gap-2 rounded-full border border-solid px-8 py-3 font-medium capitalize backdrop-blur-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button>T</button>
      </nav>

      <div className="flex flex-row gap-4">
        <a href="#">
          <LinkedinIcon />
        </a>
        <a href="#">
          <TwitterIcon />
        </a>
        <a href="#">
          <GithubIcon />
        </a>
        <a href="#">
          <DribbleIcon />
        </a>
      </div>
    </header>
  )
}
