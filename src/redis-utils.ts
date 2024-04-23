import "server-only"

import { createClient } from "redis"

export const getViewCount = async (slug: string) => {
  // console.log("slug", slug, "url", process.env.REDIS_URL)

  try {
    const client = await createClient({
      url: process.env.REDIS_URL,
    })
      // .on("error", (error) => console.log("Redis Client Error", error))
      .connect()

    const count = await client.incr(slug)

    await client.disconnect()

    return count
  } catch (error) {
    console.log("failed to obtain view count data", error)
    return null
  }
}
