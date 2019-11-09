import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Contact = () => (
  <Layout>
    <SEO title="Contact" />

    <section className="width-100-pc hide-flow-x main-top">
      <div className="maxwidth-sl mx-auto clearfix work-top h-100">
        <div className="wrapper right-50">
          <p>
            Thanks for your interest! Please fill out this form and I’ll get back to you as quickly as I can. I usually take a day to reply. :)
          </p>
          <p>
            Please note: Although I read every email, I don’t have the capacity to respond to everyone. I’ll only reply if your email aligns with my goals and acknowledge my time and capabilities.
          </p>
        </div>
        <div className="wrapper left-50">
          <h2 className="m-0">Contact</h2>
          <form name="contact"  method="POST" action="https://formspree.io/itztonye@gmail.com" data-netlify="true">
                <label>Your Name: 
                  <input type="text" name="name" />
                </label>
                <label>Your Email: 
                  <input type="email" name="email" required />
                </label>
                <label>Enquiry:
                  <select name="enquiry">
                    <option value="Design">Design</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Development">Development</option>
                    <option value="Event talk">Event talk</option>
                    <option value="Other">Just saying hello</option>
                  </select>
                </label>
                <label>Message: 
                  <textarea name="message"></textarea>
                </label>
              <div className="d-flx j-c-fe pt-1">
                <button type="submit" className="bg-primary d-ibl thin-primary-border px-2 py-hh co-white">
                    Send
                </button>
              </div>
          </form>
        </div>
      </div>
    </section>

    <footer className="width-100-pc">
      <div className="d-flx al-i-c j-c-sb wrapper top-bottom-border maxwidth-sl mx-auto">
        <div className="d-flx py-1">
          <a href="https://linkedin.com/in/psybug" className="d-blk prefix is-even-wider p-h hover-outline" title="LinkedIn">
            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.7385 0H2.26145C1.0125 0 0 1.0125 0 2.26145V22.7385C0 23.9875 1.0125 25 2.26145 25H22.7385C23.9875 25 25 23.9875 25 22.7385V2.26145C25 1.0125 23.9875 0 22.7385 0ZM7.73606 21.5866C7.73606 21.9501 7.44143 22.2448 7.07795 22.2448H4.27651C3.91302 22.2448 3.61839 21.9501 3.61839 21.5866V9.84313C3.61839 9.47965 3.91302 9.18501 4.27651 9.18501H7.07795C7.44143 9.18501 7.73606 9.47965 7.73606 9.84313V21.5866ZM5.67723 8.07801C4.2074 8.07801 3.01584 6.88645 3.01584 5.41662C3.01584 3.94679 4.2074 2.75524 5.67723 2.75524C7.14706 2.75524 8.33861 3.94679 8.33861 5.41662C8.33861 6.88645 7.14712 8.07801 5.67723 8.07801ZM22.3763 21.6397C22.3763 21.9738 22.1054 22.2448 21.7712 22.2448H18.7651C18.4309 22.2448 18.1599 21.9738 18.1599 21.6397V16.1313C18.1599 15.3096 18.401 12.5304 16.0125 12.5304C14.1598 12.5304 13.784 14.4327 13.7086 15.2863V21.6397C13.7086 21.9738 13.4377 22.2448 13.1035 22.2448H10.196C9.86185 22.2448 9.5909 21.9738 9.5909 21.6397V9.79012C9.5909 9.45596 9.86185 9.18501 10.196 9.18501H13.1035C13.4376 9.18501 13.7086 9.45596 13.7086 9.79012V10.8147C14.3955 9.7837 15.4165 8.98796 17.5902 8.98796C22.4039 8.98796 22.3763 13.4851 22.3763 15.956V21.6397Z" fill="#0077B5" />
            </svg>   
          </a>
          <a href="https://dribbble.com/psybuglite" className="d-blk prefix suffix is-even-wider p-h hover-outline" title="Dribbble">
            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 0.00100708C5.59608 0.00100708 0 5.59786 0 12.501C0 19.4042 5.59608 25.0009 12.5 25.0009C19.4039 25.0009 25 19.4041 25 12.5009C25 5.59777 19.4038 0.00100708 12.5 0.00100708ZM20.7022 6.05097C22.0459 7.75725 22.8687 9.88842 22.9335 12.2079C20.1288 11.7166 17.7101 11.7017 15.6202 12.033C15.3554 11.4251 15.0827 10.8345 14.8031 10.2627C17.0445 9.34082 19.0546 7.99625 20.7022 6.05097ZM19.264 4.55725C17.7921 6.34395 15.9444 7.57361 13.8538 8.4104C12.5155 5.93074 11.139 3.86428 10.039 2.35572C10.8289 2.16272 11.6515 2.05965 12.4992 2.05965C15.0796 2.0588 17.4405 3.00175 19.264 4.55725ZM8.01172 3.0752C9.07499 4.49469 10.4898 6.55093 11.8735 9.07205C8.94068 9.87752 5.66018 10.0947 2.33987 10.1041C3.07265 6.99787 5.19291 4.42286 8.01172 3.0752ZM2.05933 12.5001L2.06791 12.1625H2.12412C5.84443 12.1625 9.53814 11.9188 12.8499 10.943C13.0968 11.4454 13.3397 11.961 13.5773 12.4915C9.22027 13.7689 6.50384 16.636 4.64215 19.3641C3.03592 17.5291 2.05933 15.1267 2.05933 12.5001ZM6.16401 20.7908C7.92651 18.1361 10.3827 15.5096 14.3796 14.4064C15.3132 16.7986 16.0749 19.4095 16.4781 22.1516C15.2515 22.6611 13.9086 22.9423 12.5008 22.9423C10.1187 22.9423 7.92187 22.14 6.16401 20.7908ZM18.3984 21.1111C17.971 18.6056 17.271 16.2158 16.4281 14.0002C18.2547 13.7682 20.3546 13.8245 22.7889 14.2721C22.3023 17.1016 20.6757 19.5463 18.3984 21.1111Z" fill="#EA4C89" />
            </svg>
          </a>
          <a href="https://twitter.com/psybuglite" className="d-blk suffix is-wider p-h hover-outline" title="Twitter">
            <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.6024 4.5215C24.0469 4.76781 23.4703 4.96213 22.8786 5.10281C23.5306 4.48329 24.0208 3.7084 24.2973 2.84348C24.3762 2.59656 24.108 2.38304 23.8851 2.51525C23.062 3.00348 22.1754 3.36974 21.2498 3.60398C21.1961 3.61758 21.1407 3.62446 21.0851 3.62446C20.9165 3.62446 20.7526 3.56187 20.6237 3.44825C19.6389 2.58035 18.3724 2.10236 17.0575 2.10236C16.4885 2.10236 15.914 2.19104 15.35 2.36598C13.6023 2.90803 12.2539 4.34962 11.8308 6.12821C11.6721 6.79534 11.6291 7.46307 11.703 8.11283C11.7115 8.1875 11.6762 8.23961 11.6544 8.26405C11.6162 8.3069 11.562 8.33146 11.5057 8.33146C11.4995 8.33146 11.493 8.33116 11.4866 8.33055C7.6611 7.97514 4.21143 6.13211 1.77303 3.14105C1.64868 2.98848 1.41024 3.0072 1.31113 3.17719C0.833626 3.9964 0.581283 4.93336 0.581283 5.88678C0.581283 7.34793 1.16832 8.72491 2.18799 9.72874C1.75919 9.62707 1.34416 9.46695 0.95864 9.25282C0.772125 9.1492 0.542639 9.28239 0.540018 9.49572C0.513321 11.6664 1.78418 13.5978 3.68797 14.4676C3.64963 14.4685 3.61129 14.4689 3.57289 14.4689C3.27112 14.4689 2.96556 14.4398 2.66482 14.3823C2.45478 14.3422 2.27832 14.5414 2.34354 14.7451C2.96148 16.6743 4.62256 18.0963 6.61034 18.4192C4.9606 19.5266 3.03944 20.1108 1.03989 20.1108L0.416528 20.1104C0.224467 20.1104 0.0620283 20.2356 0.0130835 20.4216C-0.03513 20.6049 0.0536778 20.7982 0.217457 20.8934C2.47063 22.2047 5.04069 22.8977 7.65092 22.8977C9.93573 22.8977 12.073 22.4443 14.0033 21.5501C15.773 20.7304 17.3368 19.5586 18.6513 18.0672C19.8758 16.678 20.8334 15.0743 21.4973 13.3007C22.1301 11.61 22.4646 9.80609 22.4646 8.08381V8.00177C22.4646 7.72523 22.5896 7.46502 22.8079 7.2879C23.6359 6.61559 24.357 5.82418 24.951 4.93567C25.1078 4.70107 24.8604 4.40703 24.6024 4.5215Z" fill="#1da1f2" />
            </svg> 
          </a>
        </div>
      </div>
      
      
      <div className="wrapper tx-c maxwidth-sl mx-auto">
        <p className="mb-h co-richblack picotext">
          Built with <a href="http://gatsbyjs.org" className="co-primary fw-bold">Gatsby.js</a>, hosted on <a href="http://netlify.com" className="co-primary fw-bold">Netlify</a>. The source code and other assets are on <a href="http://github.com" className="co-primary fw-bold">Github</a>.
        </p>
        <p className="co-richblack picotext">
          Copyright © {new Date().getFullYear()}. Copyright Dennis Dickson. All Rights Reserved.
        </p>
      </div>
    </footer>


  </Layout>
)

export default Contact
