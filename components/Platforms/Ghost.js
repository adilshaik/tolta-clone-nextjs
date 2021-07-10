import dataSectionStyle from '../../styles/DataSection.module.css'
import Image from 'next/image'
import ghostImage from '../../public/images/icon-ghost.png'

const Ghost = () => {
  return (
    <div className={dataSectionStyle.card}>
      <div className={dataSectionStyle.card_ghost}>
        <div className={dataSectionStyle.card_background}></div>
        <h2 className={dataSectionStyle.card_heading}>Ghost</h2>
        <div className={dataSectionStyle.card_icon}>
          <Image src={ghostImage} alt='Ghost-image' />
        </div>
        <ul className={dataSectionStyle.list}>
          <li className={dataSectionStyle.yes}>Total members</li>
          <li className={dataSectionStyle.yes}>Free members</li>
          <li className={dataSectionStyle.yes}>Paying members</li>
          <li className={dataSectionStyle.yes}>MRR</li>
        </ul>
      </div>
    </div>
  )
}

export default Ghost
