import pricingStyle from '../styles/Pricing.module.css'
import Heading from './Headings/Headings'
import Free from './Plans/Free'
import Essentials from './Plans/Essentials'
import Standard from './Plans/Standard'

const Pricing = () => {
  return (
    <section className={pricingStyle.section}>
      <Heading
        heading='Pricing'
        paragraph='Start creating counters with a 14-day free trial.'
      />
      <div className={pricingStyle.plans}>
        <Free />
        <Essentials />
        <Standard />
      </div>
    </section>
  )
}

export default Pricing
