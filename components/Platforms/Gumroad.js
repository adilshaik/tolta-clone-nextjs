import dataSectionStyle from '../../styles/DataSection.module.css'
import Image from 'next/image'
import gumroadImage from '../../public/images/icon-gumroad.png'

const Gumroad = () => {
  return (
    <div className={dataSectionStyle.card}>
      <div className={dataSectionStyle.card_gumroad}>
        <div className={dataSectionStyle.card_background}></div>
        <h2 className={dataSectionStyle.card_heading}>Gumroad</h2>
        <div className={dataSectionStyle.card_icon}>
          <Image src={gumroadImage} alt='Gumroad-image' />
        </div>
        <ul className={dataSectionStyle.list}>
          <li className={dataSectionStyle.yes}>Product sales</li>
          <li className={dataSectionStyle.yes}>Product revenue</li>
          <li className={dataSectionStyle.yes}>Account sales</li>
          <li className={dataSectionStyle.yes}>Account revenue</li>
        </ul>
      </div>
    </div>
  )
}

export default Gumroad
