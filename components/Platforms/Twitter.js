import dataSectionStyle from '../../styles/DataSection.module.css'
import Image from 'next/image'
import twitterImage from '../../public/images/icon-twitter.png'

const Twitter = () => {
  return (
    <div className={dataSectionStyle.card}>
      <div className={dataSectionStyle.card_twitter}>
        <div className={dataSectionStyle.card_background}></div>
        <h2 className={dataSectionStyle.card_heading}>Twitter</h2>
        <div className={dataSectionStyle.card_icon}>
          <Image src={twitterImage} alt='Twitter-image' />
        </div>
        <ul className={dataSectionStyle.list}>
          <li className={dataSectionStyle.yes}>Followers</li>
        </ul>
      </div>
    </div>
  )
}

export default Twitter
