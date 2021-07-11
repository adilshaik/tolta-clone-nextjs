import Heading from './Headings/Headings'
import dataSectionStyle from '../styles/DataSection.module.css'
import Twitter from './Platforms/Twitter'
import Youtube from './Platforms/Youtube'
import Instagram from './Platforms/Instagram'
import ChartMogul from './Platforms/ChartMogul'
import Gumroad from './Platforms/Gumroad'
import Paddle from './Platforms/Paddle'
import Ghost from './Platforms/Ghost'
import Clubhouse from './Platforms/Clubhouse'

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
