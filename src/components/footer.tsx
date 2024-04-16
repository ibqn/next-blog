"use client"

import { useForm } from "react-hook-form"

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
          className="mr-2 w-full border-0 border-b bg-transparent pb-1 text-dark focus:border-dark focus:ring-0"
        />

        <input
          type="submit"
          className="cursor-pointer rounded bg-dark px-3 py-1 font-medium capitalize text-light"
        />
      </form>

      <div className="mt-8 flex items-center"></div>
    </footer>
  )
}
