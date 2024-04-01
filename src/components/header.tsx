import { Logo } from "./logo"

type Props = {}

export const Header = (props: Props) => {
  return (
    <header className="w-full items-center justify-between p-4 px-10">
      <Logo />
    </header>
  )
}
