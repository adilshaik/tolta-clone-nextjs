import pricingStyle from '../../styles/Pricing.module.css'

const Essentials = () => {
  return (
    <div className={pricingStyle.plan_box_essentials}>
      <h2 className={pricingStyle.heading}>Essentials</h2>
      <p className={pricingStyle.description}>
        <b className={pricingStyle.price}>$14/month</b>
        <br />
        or <b className={pricingStyle.bold}>$126/year</b>
        <span className={pricingStyle.free}>3 months free</span>
      </p>
      <ul className={pricingStyle.list}>
        <li className={pricingStyle.yes}>Up to 10 counters</li>
        <li className={pricingStyle.yes}>Unlimited counter embeds</li>
        <li className={pricingStyle.yes}>Simple in-app analytics</li>
        <li className={pricingStyle.yes}>Simple email digests</li>
        <li className={pricingStyle.yes}>Milestone email alerts</li>
      </ul>
    </div>
  )
}

export default Essentials
