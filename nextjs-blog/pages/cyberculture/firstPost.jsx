import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <>
    <Layout>
      <Head>
        <title>Cyber Culture</title>
      </Head>
      <h1>Acontecimentos do cyber espaço</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      </Layout>
    </>
  )
}