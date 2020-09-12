import React, { useEffect } from "react"
import SEO from "../components/seo"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap/all"

const About = () => {
  useEffect(() => {
    const aboutTl = gsap.timeline()
    aboutTl.to(".about-image", { opacity: 1, y: 0, duration: 0.5, delay: 0.2 })
    aboutTl.to(".about-text", { opacity: 1, y: 0, duration: 0.5 })
  }, [])

  return (
    <>
      <SEO title="About" />
      <section className="width-100-pc page-padding will-grow">
        <div className="main-wrap mx-auto wrapper about-grid">
          <div className="about-image"></div>
          <div className="about-content block-parent mediumtext">
            <AnimatePresence>
              <motion.span
                layoutId="block"
                layout
                className="blue-block"
                style={{
                  position: `absolute`,
                  display: `inline-block`,
                  backgroundColor: `#0F52BA`,
                  height: `50px`,
                  width: `50px`,
                  top: `0px`,
                  left: `0px`,
                }}
              ></motion.span>
            </AnimatePresence>
            <div className="about-text">
              <p>
                Hi, I'm Dennis. 
              </p>
              <p>
                I'm a front-end developer and UI designer.
              </p>
              <p>
                With more than 4 years of experience working in design and
                developing websites and applications, my field of knowledge
                covers both UX/UI design and front-end development.
              </p>
              <div className="pt-2">
                <h3 className="ff-aquire co-white">Work history</h3>
                <ul className="none">
                  <li className="my-2">
                    <p className="m-0">
                      <a href="https://protocoh.com" target="_blank" rel="noreferrer"
                        className="d-ibl social-link hover-outline co-sweetblue ff-aquire link"
                        title="Protocoh"
                      >
                        Protocoh
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.66669 11.3333L11.3334 4.66666"
                            stroke="#A5A5A5"
                            strokeWidth="0.666667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.66669 4.66666H11.3334V11.3333"
                            stroke="#A5A5A5"
                            strokeWidth="0.666667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>  |  Frontend Developer
                    </p>
                    <p className="m-0 smalltext">
                      March 2020 - Present 
                    </p>
                  </li>
                  <li className="my-2">
                    <p className="m-0">
                      <a href="https://mkobo.com.ng" target="_blank" rel="noreferrer"  className="d-ibl social-link hover-outline co-sweetblue ff-aquire link"
                        title="Mkobo"
                      >
                        Mkobo
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.66669 11.3333L11.3334 4.66666"
                            stroke="#A5A5A5"
                            strokeWidth="0.666667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.66669 4.66666H11.3334V11.3333"
                            stroke="#A5A5A5"
                            strokeWidth="0.666667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>  |  Product Designer 
                    </p>
                    <p className="m-0 smalltext">
                      November 2018 - February 2020 
                    </p>
                  </li>
                  <li className="my-2">
                    <p className="m-0">
                      <a href="https://softcom.ng" target="_blank" rel="noreferrer"  className="d-ibl social-link hover-outline co-sweetblue ff-aquire link"
                        title="Softcom"
                      >
                        Softcom
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.66669 11.3333L11.3334 4.66666"
                            stroke="#A5A5A5"
                            strokeWidth="0.666667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.66669 4.66666H11.3334V11.3333"
                            stroke="#A5A5A5"
                            strokeWidth="0.666667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>  |  Frontend Designer and Developer
                    </p>
                    <p className="m-0 smalltext">
                      February 2018 - November 2018 
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
