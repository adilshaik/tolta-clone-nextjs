import dataSectionStyle from '../../styles/DataSection.module.css'
import Image from 'next/image'
import chartMogulImage from '../../public/images/icon-chartmogul.png'

const ChartMogul = () => {
  return (
    <div className={dataSectionStyle.card}>
      <div className={dataSectionStyle.card_chartMogul}>
        <div className={dataSectionStyle.card_background}></div>
        <h2 className={dataSectionStyle.card_heading}>ChartMogul</h2>
        <div className={dataSectionStyle.card_icon}>
          <Image src={chartMogulImage} alt='ChartMogul-image' />
        </div>
        <ul className={dataSectionStyle.list}>
          <li className={dataSectionStyle.yes}>MRR</li>
          <li className={dataSectionStyle.yes}>ARR</li>
          <li className={dataSectionStyle.yes}>ARPU</li>
          <li className={dataSectionStyle.yes}>MRR churn</li>
          <li className={dataSectionStyle.yes}>Customers</li>
        </ul>
      </div>
    </div>
  )
}

export default ChartMogul
