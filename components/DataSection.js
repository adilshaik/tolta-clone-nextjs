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
      <h1 className={dataSectionStyle.data_heading}>
        Data from all over, in one place
      </h1>
      <p className={dataSectionStyle.data_description}>
        Tolta currently tracks data from eight platforms.
      </p>
      <p className={dataSectionStyle.data_description}>
        More are on the way, including Patreon, ConvertKit, EmailOctopus,
        Twitch, Simplecast and Revue.
      </p>
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
