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
                I'm a front-end developer and UI Designer. Other
                names for people who do what I do are front-end designers, UI
                developers, UI engineers, or design engineers.
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
                      <a href="https://protocoh.com" className="link co-sweetblue">Protocoh</a>  |  Frontend Developer
                    </p>
                    <p className="m-0 smalltext">
                      March 2020 - Present 
                    </p>
                  </li>
                  <li className="my-2">
                    <p className="m-0">
                      <a href="https://mkobo.com.ng" className="link co-sweetblue">Mkobo</a>  |  Product Designer 
                    </p>
                    <p className="m-0 smalltext">
                      November 2018 - February 2020 
                    </p>
                  </li>
                  <li className="my-2">
                    <p className="m-0">
                      <a href="https://softcom.ng" className="link co-sweetblue">Softcom</a>  |  UI Designer and Developer
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
