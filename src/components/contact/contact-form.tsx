"use client"

import { useForm } from "react-hook-form"
import { FormInput } from "./form-input"
import { FormTextarea } from "./form-textarea"

type Props = {}

type ContactForm = {
  name: string
  email: string
  phoneNumber: string
  projectDetails: string
}

export const ContactForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  console.log(errors)

  return (
    <form
      onSubmit={onSubmit}
      className="mt-12 font-inter text-xl font-medium leading-relaxed"
    >
      Hello! My name is
      <FormInput
        type="text"
        placeholder="your name"
        {...register("name", { required: true, maxLength: 80 })}
      />
      and I want to discuss a potential project with you. You can email me at
      <FormInput type="email" placeholder="your@email" {...register("email")} />
      or reach out to me on{" "}
      <FormInput
        type="tel"
        placeholder="your phone number"
        {...register("phoneNumber")}
      />
      Here are some details about my project:
      <FormTextarea
        placeholder="My project is about..."
        className="mt-4 w-full"
        {...register("projectDetails", {})}
        rows={3}
      />
      <input
        type="submit"
        value="send request"
        className="mt-8 flex cursor-pointer rounded border-2 border-solid border-dark px-8 py-3 text-xl font-medium capitalize"
      />
    </form>
  )
}
