import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Date from '../components/date'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>二郎系ラーメン大好きだけど、麺半分で頼んじゃうよ</p>
        <p>
          (二郎用語集は<a href='https://ameblo.jp/i-psx/entry-11838426338.html'>こちら</a>。)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>これだけは覚えとこう</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
      <Link href={`/dashBoard`}>
        <p><a className={utilStyles.headingLg}>Dashboard</a>  はTailwindUiで作ってるよ</p>
      </Link>
      </section>
    </Layout>
  )
}