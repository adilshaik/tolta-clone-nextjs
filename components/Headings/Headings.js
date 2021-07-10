import headingStyles from '../../styles/Heading.module.css'

const Headings = ({ heading, paragraph, children }) => {
  return (
    <>
      <h1 className={headingStyles.data_heading}>{heading}</h1>
      <p className={headingStyles.data_description}>{paragraph}</p>
      <p className={headingStyles.data_description}>{children}</p>
    </>
  )
}

export default Headings
