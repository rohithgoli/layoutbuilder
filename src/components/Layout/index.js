// Write your code here
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

import './index.css'

const Layout = () => (
  <div className="layout-bg-container">
    <div className="layout-container">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
)

export default Layout
