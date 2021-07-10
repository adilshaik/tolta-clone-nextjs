import Header from '../components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tolta Clone</title>
        <meta name='description' content='tolta clone using next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
    </>
  )
}
