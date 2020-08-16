import React from "react"
import { Link } from "gatsby"

const Footer = () =>  (
    <footer className="main-wrap mx-auto pos-r section-wrapper-y">
      <div className="wrapper-x">
        <div className="bg-branddark">
          <div className="footer-grid">
            <div>
              <p className="">Dennis Dickson</p>
              <h3 className="ff-aquire co-white">UI Engineer</h3>
              <ul className="footer-links my-2">
                <li className="my-h">
                  <Link to="/about" className="footer-link link">
                    About
                  </Link>
                </li>
                <li className="my-h">
                  <Link to="/work" className="footer-link link">
                    Work
                  </Link>
                </li>
                <li className="my-h">
                  <Link to="/writing" className="footer-link link">
                    Writing
                  </Link>
                </li>
                <li className="my-h">
                  <Link to="/contact" className="footer-link link">
                    Contact
                  </Link>
                </li>
              </ul>
              <a href="mailto:hi@dennisdickson.com" className="smalltext link email-link">
                hi@dennisdickson.com
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.66669 11.3333L11.3334 4.66666" stroke="#A5A5A5" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.66669 4.66666H11.3334V11.3333" stroke="#A5A5A5" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div>
            </div>
          </div>
          <div className="d-flx j-c-sb al-i-c fw-w copy-padding">
            <div className="d-flx al-i-c mb-2">
              <a href="https://linkedin.com/in/psybug" className="d-blk prefix is-wider p-h social-link hover-outline ff-aquire link" title="LinkedIn">
                LI
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.66669 11.3333L11.3334 4.66666" stroke="#A5A5A5" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.66669 4.66666H11.3334V11.3333" stroke="#A5A5A5" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="https://dribbble.com/psybuglite" className="d-blk prefix suffix is-wider p-h social-link hover-outline ff-aquire link" title="Dribbble">
                DR
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.66669 11.3333L11.3334 4.66666" stroke="#A5A5A5" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.66669 4.66666H11.3334V11.3333" stroke="#A5A5A5" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="https://twitter.com/psybuglite" className="d-blk suffix is-wider p-h social-link hover-outline ff-aquire link" title="Twitter">
                TW
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.66669 11.3333L11.3334 4.66666" stroke="#A5A5A5" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.66669 4.66666H11.3334V11.3333" stroke="#A5A5A5" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <p className="picotext">
              Dennis Dickson &copy; 2016 - 2020
            </p>
          </div>
        </div>
      </div>
    </footer>
)

export default Footer
