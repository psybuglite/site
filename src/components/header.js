import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import avatar from "../images/small-pic.png"
import icon from "../images/tonye-icon.png"



const Header = ({ siteTitle }) => (

  <header className="site-header pos-a fixed-to-top w-100">
    <div className="main-wrap wrapper-x py-h mx-auto">
      <nav className="d-flx j-c-sb al-i-c">
        <Link to="/" activeClassName="is-home">
          <div className="logo-area bg-bg d-flx al-i-c">

            <div className="prefix is-wider d-flx flex-dir-col al-i-c j-c-c hide">
              <div className="back-svg pos-a">
                <svg width={45} height={45} viewBox="0 0 60 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M57.8152 4.87573C61.4291 9.52666 59.8421 18.2314 58.1608 27.439C56.4639 36.6466 54.7041 46.3727 48.0891 51.7307C41.4898 57.073 30.0667 58.0629 19.9006 54.0876C9.71887 50.0966 0.825534 41.1247 0.055616 31.9485C-0.714302 22.7724 6.6392 13.4077 14.0713 7.89255C21.5033 2.37742 28.9982 0.696173 37.1688 0.161945C45.3393 -0.372284 54.1855 0.224795 57.8152 4.87573Z" fill="#7BDCB5" />
                </svg>
              </div>
              <img src={avatar} className="small-avatar z-depth-2" alt={siteTitle} />
            </div>

            <div className="al-i-c will-show">
              <img src={icon} className="small-avatar prefix is-wider" alt="Tonye Dickson" />
              <p className="text-dance co-richblack show-mediumup">
                  Tonye Dickson
              </p>
            </div>

          </div>
        </Link>
        <ul className="none d-flx al-i-c topmenu">
          <li className="my-h">
            <Link to="/about" className="tx-c d-blk py-h co-richblack" activeClassName="is-active">
              About
            </Link>
          </li>
          <li className="my-h">
            <Link to="/work" className="tx-c d-blk py-h co-richblack" activeClassName="is-active">
              Work
            </Link>
          </li>
          <li className="my-h">
            <Link to="/writing" partiallyActive={true} className="tx-c d-blk py-h co-richblack" activeClassName="is-active">
              Writing
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
