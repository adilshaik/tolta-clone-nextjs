import Heading from './Headings/Headings'
import Image from 'next/image'
import featuresStyle from '../styles/Features.module.css'
const Features = ({ features }) => {
  return (
    <section className={featuresStyle.section}>
      <Heading
        heading='Key features'
        paragraph='Tolta tracks your stats, generates custom analytics, and enables displaying live counters across the web.'
      />
      <div className={featuresStyle.features}>
        {features.map((feature) => {
          return (
            <div className={featuresStyle.feature} key={feature.id}>
              <div className={featuresStyle.feature_image_box}>
                <Image
                  className={featuresStyle.feature_image}
                  src={'/' + feature.image}
                  alt='Picture of the author'
                  height={500}
                  width={1100}
                />
              </div>
              <h2 className={featuresStyle.heading}>{feature.h1}</h2>
              <p className={featuresStyle.description}>{feature.p}</p>
              <p className={featuresStyle.coming}>{feature.coming}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Features
