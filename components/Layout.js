import layoutStyle from '../styles/Layout.module.css'
const Layout = ({ children }) => {
  return (
    <div className={layoutStyle.main}>
      <main>{children}</main>
    </div>
  )
}

export default Layout
