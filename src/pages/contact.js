import React, {useEffect} from "react"
import SEO from "../components/seo"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap/all"

const Contact = () => {
  useEffect(() => {
    const contactTl = gsap.timeline()
    contactTl.to(".contact-heading", { opacity: 1, y: 0, duration: 0.5, delay: 0.2})
    contactTl.to(".contact-text", { opacity: 1, y: 0, duration: 0.5 })
  }, [])

  return(
    <>
      <SEO title="Contact" />
      <section className="width-100-pc page-padding will-grow">
        <div className="main-wrap mx-auto wrapper-x">
          <h2 className="sectionhead-text contact-heading tx-c block-parent w-100">Contact</h2>
          <div className="d-flx j-c-c mb-2">
            <AnimatePresence>
              <motion.span
                layoutId="block"
                layout
                className="blue-block"
                style={{
                  display: `inline-block`,
                  backgroundColor: `#0F52BA`,
                  height: `50px`,
                  width: `50px`
                }}
              ></motion.span>
            </AnimatePresence>
          </div>
          <div className="maxwidth-tb mx-auto contact-text">
            <p className="mediumtext tx-c">I love to eat bolè. I write code and improve my design and skills every day. I am honored to work with special people. Feel free to send me an email. I try to respond as quickly as I can.</p>
            <p className="tx-c">
              <a href="mailto:itztonye@gmail.com" className="d-ibl link mediumtext tx-c co-sweetblue" >itztonye@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact
