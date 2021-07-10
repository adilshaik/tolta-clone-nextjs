import pricingStyle from '../../styles/Pricing.module.css'

const Standard = () => {
  return (
    <div className={pricingStyle.plan_box_standard}>
      <h2 className={pricingStyle.heading}>Standard</h2>
      <p className={pricingStyle.description}>
        <b className={pricingStyle.price}>$29/month</b>
        <br />
        or <b className={pricingStyle.bold}>$261/year</b>
        <span className={pricingStyle.free}>3 months free</span>
      </p>
      <ul className={pricingStyle.list}>
        <li className={pricingStyle.yes}>Up to 20 counters</li>
        <li className={pricingStyle.yes}>Unlimited counter embeds</li>
        <li className={pricingStyle.yes}>Detailed in-app analytics</li>
        <li className={pricingStyle.yes}>Detailed email digests</li>
        <li className={pricingStyle.yes}>Milestone email alerts</li>
        <li className={pricingStyle.yes}>API access</li>
      </ul>
    </div>
  )
}

export default Standard
