import Image from "next/image"
import profileImage from "./profile-image.svg"

type Props = {}

export const CoverSection = (props: Props) => {
  return (
    <section className="mx-10 flex h-[75hv]  flex-row items-center justify-center border-b-2 border-solid border-dark text-dark">
      <div className="flex h-full flex-1 justify-center border-r-2 border-solid border-dark">
        <Image
          alt="Profile Image"
          src={profileImage}
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-16 text-left">
        <h2 className="text-6xl font-bold capitalize">
          Dream Big, Work Hard, Achieve More!
        </h2>
        <p className="mt-4 text-base font-medium capitalize">
          This Mantra Drives My Work As A Passionate Freelancer. I Blend
          Innovative Technology With Timeless Design For Captivating Digital
          Experiences. Inspired By Nature And Literature, I&apos;m A Perpetual
          Learner Embracing Challenges. With Each Project, I Aim To Leave A
          Lasting Impact—One Pixel At A Time.
        </p>
      </div>
    </section>
  )
}
