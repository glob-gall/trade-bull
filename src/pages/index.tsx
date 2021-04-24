import Head from 'next/head'
import TemplateHome from '../Templates/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Trade Bull</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <TemplateHome/>
      </>
    )
}
