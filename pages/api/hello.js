// You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).

export default function handler(req, res) {
  res.status(200).json({ text: 'Hello'})
}