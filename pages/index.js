import Head from 'next/head'
import Heading from '../components/Headings/Headings'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CounterForm from '../components/CounterForm'
import DataSection from '../components/DataSection'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import counterFormStyle from '../styles/CounterForm.module.css'

export default function Home({ features }) {
  return (
    <>
      <Head>
        <title>Tolta Clone</title>
        <meta name='description' content='tolta clone using next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <CounterForm paragraph='Free unlimited trial. No credit card required.' />
      <DataSection />
      <Features features={features} />
      <Pricing />
      <article className={counterFormStyle.text_center}>
        <Heading heading='Get started' />
        <CounterForm paragraph='Try a free 14-day trial. No credit card required.' />
      </article>
      <Footer />
    </>
  )
}

export const getStaticProps = () => {
  const features = [
    {
      id: 1,
      h1: 'Monitor all of your stats in a single place',
      image: '/../public/images/feature-dashboard.png',
      p: 'In Tolta, you can see all of your data, from multiple sources, in a single dashboard. With a glance you can see how all of your numbers are doing.',
      coming: '',
    },
    {
      id: 2,
      h1: 'Track change and growth over time',
      image: '/../public/images/feature-chart.png',
      p: `Tolta tracks your figures over time, creating histories and analytics that, in some instances, you can't get anywhere else. Browse with charts and understand with time-based insights.`,
      coming: '',
    },
    {
      id: 3,
      h1: 'Get an overview of your counters, delivered daily',
      image: '/../public/images/feature-digests.png',
      p: 'A daily email digest keeps you updated with the latest figures and insights, right in your inbox.',
      coming: '',
    },
    {
      id: 4,
      h1: 'Set automated milestone alert emails',
      image: '/../public/images/feature-thresholds.png',
      p: 'Get notified by email when you hit different targets, like every 1,000 followers or every 100,000 views.',
      coming: 'Coming soon.',
    },
    {
      id: 5,
      h1: 'Place your counters on any web page',
      image: '/../public/images/feature-embed.png',
      p: 'Each counter gets a copy-and-paste HTML snippet that you can put on any website (your blog, an online shop, a Notion document etc.)',
      coming: '',
    },
    {
      id: 6,
      h1: 'Access your counters from anywhere using the API',
      image: '/../public/images/feature-api.png',
      p: 'With API access you can show and use your counters and Tolta-generated analytics in other places and applications.',
      coming: 'Coming soon.',
    },
    {
      id: 7,
      h1: 'Create Mac and iOS widgets with Scriptable',
      image: '/../public/images/feature-widgets.png',
      p: 'Use our pre-written Scriptable script to easily create custom iOS and Mac widgets. (Requires API access)',
      coming: 'Comming soon.',
    },
  ]

  return {
    props: {
      features,
    },
  }
}
