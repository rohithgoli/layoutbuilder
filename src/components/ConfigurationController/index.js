// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickContentCheckbox = () => {
        onToggleShowContent()
      }

      const onClickLeftNavbarCheckbox = () => {
        onToggleShowLeftNavbar()
      }

      const onClickRightNavbarCheckbox = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controller-bg-container">
          <div className="configuration-controller-container">
            <h1 className="title">Layout</h1>
            <ul className="configuration-items-container">
              <li className="configuration-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  id="contentCheckbox"
                  checked={showContent}
                  onChange={onClickContentCheckbox}
                />
                <label htmlFor="contentCheckbox">Content</label>
              </li>
              <li className="configuration-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  id="leftNavbarCheckbox"
                  checked={showLeftNavbar}
                  onChange={onClickLeftNavbarCheckbox}
                />
                <label htmlFor="leftNavbarCheckbox">Left Navbar</label>
              </li>
              <li className="configuration-item">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  id="rightNavbarCheckbox"
                  checked={showRightNavbar}
                  onChange={onClickRightNavbarCheckbox}
                />
                <label htmlFor="rightNavbarCheckbox">Right Navbar</label>
              </li>
            </ul>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
