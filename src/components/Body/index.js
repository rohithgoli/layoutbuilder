// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderNavbarTopContainer = () => (
        <div className="navbar-top-container">
          <h1 className="container-title">Left Navbar Menu</h1>
          <ul className="list-container">
            <li className="list-item" key="Item 1">
              Item 1
            </li>
            <li className="list-item" key="Item 2">
              Item 2
            </li>
            <li className="list-item" key="Item 3">
              Item 3
            </li>
            <li className="list-item" key="Item 4">
              Item 4
            </li>
          </ul>
        </div>
      )

      const renderContentContainer = () => (
        <div className="content-container">
          <h1 className="content-title">Content</h1>
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      )

      const renderNavbarBottomContainer = () => (
        <div className="navbar-bottom-container">
          <h1 className="container-title">Right Navbar Menu</h1>
          <div className="ad-container">
            <div className="ad-item-container">
              <p className="ad-item-content">Ad 1</p>
            </div>
            <div className="ad-item-container">
              <p className="ad-item-content">Ad 2</p>
            </div>
          </div>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar && renderNavbarTopContainer()}
          {showContent && renderContentContainer()}
          {showRightNavbar && renderNavbarBottomContainer()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
