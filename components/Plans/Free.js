import pricingStyle from '../../styles/Pricing.module.css'

const Free = () => {
  return (
    <div className={pricingStyle.plan_box_free}>
      <h2 className={pricingStyle.heading}>Free</h2>
      <p className={pricingStyle.description}>
        <b className={pricingStyle.price}>$ 0</b>
        <br />
        Free forever
      </p>
      <ul className={pricingStyle.list}>
        <li className={pricingStyle.yes}>One counter</li>
        <li className={pricingStyle.yes}>Unlimited counter embeds</li>
        <li className={pricingStyle.yes}>Simple in-app analytics</li>
      </ul>
    </div>
  )
}

export default Free
