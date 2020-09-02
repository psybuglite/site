import React from "react"
import SEO from "../components/seo"

const Contact = () => {
  return(
    <>
      <SEO title="Contact" />
      <section className="width-100-pc page-padding will-grow">
        <div className="main-wrap mx-auto wrapper-x">
          <h2 className="sectionhead-text tx-c mb-3">
            Say Hello
          </h2>
          <div className="maxwidth-tb mx-auto">
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
