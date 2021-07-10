import dataSectionStyle from '../../styles/DataSection.module.css'
import Image from 'next/image'
import youtubeImage from '../../public/images/icon-youtube.png'

const Twitter = () => {
  return (
    <div className={dataSectionStyle.card}>
      <div className={dataSectionStyle.card_youtube}>
        <div className={dataSectionStyle.card_background}></div>
        <h2 className={dataSectionStyle.card_heading}>Youtube</h2>
        <div className={dataSectionStyle.card_icon}>
          <Image src={youtubeImage} alt='Youtube-image' />
        </div>
        <ul className={dataSectionStyle.list}>
          <li className={dataSectionStyle.yes}>Followers</li>
          <li className={dataSectionStyle.yes}>Views</li>
        </ul>
      </div>
    </div>
  )
}

export default Twitter
