import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body">
          {showLeftNavbar && (
            <nav className="left-navbar">
              <h1 className="nav-heading">Left Navbar Menu</h1>
              <ul className="nav-list">
                <li className="nav-item">Item 1</li>
                <li className="nav-item">Item 2</li>
                <li className="nav-item">Item 3</li>
                <li className="nav-item">Item 4</li>
              </ul>
            </nav>
          )}

          {showContent && (
            <main className="content">
              <h1 className="content-heading">Content</h1>
              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </main>
          )}

          {showRightNavbar && (
            <aside className="right-navbar">
              <h1 className="nav-heading">Right Navbar</h1>
              <div className="ad-card">Ad 1</div>
              <div className="ad-card">Ad 2</div>
            </aside>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
