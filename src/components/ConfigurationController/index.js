// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () =>{
  return (
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

        return (
          <div className="configuration-controller">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-column">
              <label className="checkbox-item">
                <input
                  type="checkbox"
                  name="Content"
                  checked={showContent}
                  onChange={e => onToggleShowContent(e.target.checked)}
                />
                Content
              </label>

              <label className="checkbox-item">
                <input
                  type="checkbox"
                  name="LeftNavbar"
                  checked={showLeftNavbar}
                  onChange={e => onToggleShowLeftNavbar(e.target.checked)}
                />
                Left Navbar
              </label>

              <label className="checkbox-item">
                <input
                  type="checkbox"
                  name="RightNavbar"
                  checked={showRightNavbar}
                  onChange={e => onToggleShowRightNavbar(e.target.checked)}
                />
                Right Navbar
              </label>
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default ConfigurationController
