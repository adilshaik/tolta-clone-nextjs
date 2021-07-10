import Heading from './Headings/Headings'
import dataSectionStyle from '../styles/DataSection.module.css'
import Twitter from './platforms/Twitter'
import Youtube from './platforms/Youtube'
import Instagram from './platforms/Instagram'
import ChartMogul from './platforms/ChartMogul'
import Gumroad from './platforms/Gumroad'
import Paddle from './platforms/Paddle'
import Ghost from './platforms/Ghost'
import Clubhouse from './platforms/Clubhouse'

const DataSection = () => {
  return (
    <section className={dataSectionStyle.data_section}>
      <Heading
        heading='Data from all over, in one place'
        paragraph='Tolta currently tracks data from eight platforms.'
      >
        More are on the way, including Patreon, ConvertKit, EmailOctopus,
        Twitch, Simplecast and Revue.
      </Heading>
      <div className={dataSectionStyle.data_platform}>
        <Twitter />
        <Youtube />
        <Instagram />
        <ChartMogul />
        <Gumroad />
        <Paddle />
        <Ghost />
        <Clubhouse />
      </div>
    </section>
  )
}

export default DataSection
