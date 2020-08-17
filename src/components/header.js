import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import disableScroll from 'disable-scroll'
import icon from "../images/tonye-icon.png"
import Tween from 'gsap'

const Header = () => {

  useEffect(() => {
    Tween.from(".logo-area", {opacity: 0, y: 50, duration: 0.5})
    Tween.from(".main-nav li", {opacity: 0, stagger: 0.1, x: -50, duration: 0.3, delay: 0.2})
    Tween.from(".bar1", {opacity: 0, x: -50, duration: 0.5, delay: 0.3})
    Tween.from(".bar3", {opacity: 0, x: -50, duration: 0.5, delay: 0.35})
  }, [])
  
  const [navOpen, navToggle] = useState(false);
  const toggleNav = () => {
    navToggle(!navOpen);
  }
  const mobileClasses = () => {
    let navClasses = "toggle-area none d-flx al-i-c";
    if(navOpen) {
      navClasses += " open";
      disableScroll.on();
    } else {
      disableScroll.off();
    }
    return navClasses;
  }

 return (
  <header className="site-header pos-a fixed-to-top w-100">
    <div className="main-wrap wrapper-x py-h mx-auto">
      <nav className="d-flx j-c-sb fw-w al-i-c">
        <Link to="/" className="link">
          <div className="logo-area d-flx al-i-c">
            <img src={icon} className="small-avatar" alt="Dennis Dickson" />
          </div>
        </Link>
        <div className={mobileClasses()}>
          <button type="button" className="nav-menu" onClick={toggleNav}>
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </button>
          <ul className="none main-nav d-flx al-i-c">
            <li className="my-h">
              <Link to="/about" className="tx-c d-blk py-h link" activeClassName="is-active">
                About
              </Link>
            </li>
            <li className="my-h">
              <Link to="/work" className="tx-c d-blk py-h link" activeClassName="is-active">
                Work
              </Link>
            </li>
            <li className="my-h">
              <Link to="/writing" partiallyActive={true} className="tx-c d-blk py-h link" activeClassName="is-active">
                Writing
              </Link>
            </li>
            <li className="my-h">
              <Link to="/contact" partiallyActive={true} className="tx-c d-blk py-h link" activeClassName="is-active">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
 )
}

export default Header