import dataSectionStyle from '../../styles/DataSection.module.css'
import Image from 'next/image'
import instagramImage from '../../public/images/icon-instagram.png'

const Instagram = () => {
  return (
    <div className={dataSectionStyle.card}>
      <div className={dataSectionStyle.card_instagram}>
        <div className={dataSectionStyle.card_background}></div>
        <h2 className={dataSectionStyle.card_heading}>Instagram</h2>
        <div className={dataSectionStyle.card_icon}>
          <Image src={instagramImage} alt='Instagram-image' />
        </div>
        <ul className={dataSectionStyle.list}>
          <li className={dataSectionStyle.yes}>Followers</li>
        </ul>
      </div>
    </div>
  )
}

export default Instagram
