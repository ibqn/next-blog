import Link from "next/link"
import { Logo } from "@/components/logo"
import {
  DribbleIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons"
import { ThemeSwitch } from "@/components/theme-switch"

type Props = {}

export const Header = (props: Props) => {
  return (
    <header className="flex w-full items-center justify-between p-4 px-10">
      <Logo />

      <nav className="fixed right-1/2 top-6 z-50 flex w-max translate-x-1/2 items-center gap-4 rounded-full border border-solid border-dark bg-light/80 px-8 py-3 font-medium capitalize backdrop-blur-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>

        <ThemeSwitch />
      </nav>

      <div className="flex flex-row gap-4">
        <a href="#">
          <LinkedinIcon />
        </a>
        <a href="#">
          <TwitterIcon />
        </a>
        <a href="#">
          <GithubIcon className="dark:fill-light" />
        </a>
        <a href="#">
          <DribbleIcon />
        </a>
      </div>
    </header>
  )
}
