import dataSectionStyle from '../../styles/DataSection.module.css'
import Image from 'next/image'
import paddleImage from '../../public/images/icon-paddle.png'

const Paddle = () => {
  return (
    <div className={dataSectionStyle.card}>
      <div className={dataSectionStyle.card_paddle}>
        <div className={dataSectionStyle.card_background}></div>
        <h2 className={dataSectionStyle.card_heading}>Paddle</h2>
        <div className={dataSectionStyle.card_icon}>
          <Image src={paddleImage} alt='Paddle-image' />
        </div>
        <ul className={dataSectionStyle.list}>
          <li className={dataSectionStyle.yes}>MRR</li>
          <li className={dataSectionStyle.yes}>ARR</li>
          <li className={dataSectionStyle.yes}>ARPU</li>
          <li className={dataSectionStyle.yes}>Subscriptions</li>
        </ul>
      </div>
    </div>
  )
}

export default Paddle
