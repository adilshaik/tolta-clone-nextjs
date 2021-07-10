import dataSectionStyle from '../../styles/DataSection.module.css'
import Image from 'next/image'
import clubhouseImage from '../../public/images/icon-clubhouse.png'

const Clubhouse = () => {
  return (
    <div className={dataSectionStyle.card}>
      <div className={dataSectionStyle.card_clubhouse}>
        <div className={dataSectionStyle.card_background}></div>
        <h2 className={dataSectionStyle.card_heading}>Clubhouse</h2>
        <div className={dataSectionStyle.card_icon}>
          <Image src={clubhouseImage} alt='Clubhouse-image' />
        </div>
        <ul className={dataSectionStyle.list}>
          <li className={dataSectionStyle.yes}>Followers</li>
        </ul>
      </div>
    </div>
  )
}

export default Clubhouse
