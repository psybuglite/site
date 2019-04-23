import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import avatar from "../images/small-pic.png"
import icon from "../images/tonye-icon.png"



const Header = ({ siteTitle }) => (

  <header className="site-header pos-a fixed-to-top w-100">
    <div className="main-wrap wrapper-x py-h mx-auto">
      <nav className="d-flx j-c-sb al-i-c">
        <Link to="/">
          <div className="logo-area bg-bg d-flx al-i-c">

            <div className="d-flx al-i-c">
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
