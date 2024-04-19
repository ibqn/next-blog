"use client"

import { useForm } from "react-hook-form"
import {
  DribbleIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons"
import { format } from "date-fns"
import Link from "next/link"

type Props = {}

type Form = {
  email: string
}

export const Footer = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  // console.log("form errors", errors)

  return (
    <footer className="m-10 mt-16 flex flex-col items-center rounded-2xl bg-dark text-light">
      <h3 className="mt-16 px-4 text-center text-4xl font-medium capitalize">
        Interesting Stories | Updates | Guides
      </h3>

      <p className="mt-5 w-3/5 px-4 text-center text-base font-light">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      <form
        onSubmit={onSubmit}
        className="mx-4 mt-6 flex min-w-[384px] items-stretch rounded bg-light p-2"
      >
        <input
          type="text"
          placeholder="Enter your Email"
          {...register("email", { required: true, maxLength: 80 })}
          className="mr-2 w-full border-0 border-b bg-transparent pb-1 pl-0 text-dark focus:border-dark focus:ring-0"
        />

        <input
          type="submit"
          value="Subscribe"
          className="cursor-pointer rounded bg-dark px-4 py-1 font-medium capitalize text-light"
        />
      </form>

      <div className="mt-8 flex flex-row gap-4">
        <a href="#">
          <LinkedinIcon />
        </a>
        <a href="#">
          <TwitterIcon />
        </a>
        <a href="#">
          <GithubIcon className="fill-light" />
        </a>
        <a href="#">
          <DribbleIcon />
        </a>
      </div>

      <div className="relative mt-24 flex w-full flex-row items-center justify-between border-t border-solid border-light px-8 py-6 font-medium">
        <span className="text-center">
          &copy; {format(new Date(), "yyyy")} ibqn. All rights reserved.
        </span>
        <Link href="/sitemap.xml" className="text-center">
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with <span className="text-red-500">&hearts;</span> by ibqn
        </div>
      </div>
    </footer>
  )
}
