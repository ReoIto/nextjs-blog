// You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).
import { NextApiRequest, NextApiResponse } from "next"

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'hello' })
}