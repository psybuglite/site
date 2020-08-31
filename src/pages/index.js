import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTransition from "gatsby-v2-plugin-page-transitions"
import gsap from "gsap/all"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import cns from "../images/cns.png"
import arq from "../images/arq.png"
import zoafia from "../images/zoafia.png"
import fluidcoins from "../images/fluidcoins.png"
import prodevs from "../images/prodevs.png"
import secura from "../images/secura.png"
import future from "../images/future.png"
import WritingHome from "../layouts/writingHome"
import payflowFeature from "../images/payflow-feature-image.png"

if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

const IndexPage = () => {
  useEffect(() => {
    const indexTl = gsap.timeline()

    indexTl.from(".greeting", { opacity: 0, x: 100, duration: 0.3, delay: 1 })
    indexTl.from(".very-large-text", { opacity: 0, x: 100, duration: 0.3 })
    indexTl.from(".hero-text", { opacity: 0, x: 100, duration: 0.3 })
    indexTl.from(".social-links a", { opacity: 0, y: 50, stagger: 0.2, duration: 0.3,})

    // gsap.from(".work-left-span", {
    //   scrollTrigger: {
    //     trigger: ".work-left-span",
    //     scrub: 1,
    //   },
    //   x: -100,
    //   ease: "none",
    // })
    // gsap.from(".work-right-span", {
    //   scrollTrigger: {
    //     trigger: ".work-right-span",
    //     scrub: 1,
    //   },
    //   x: 100,
    //   ease: "none",
    // })
    gsap.from(".trust", {
      scrollTrigger: {
        trigger: ".trust",
        scrub: 1,
        pin: true,
        start: "top 280px",
        end: "top -460px",
        markers: true,
      },
      ease: "none",
    })
  }, [])

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `Designer in Nigeria`,
          `Frontend Developer in Nigeria`,
          `Designer`,
          `Developer`,
          `Web developer in Nigeria`,
          `Developer Nigeria`,
          `Website designer`,
          `Website developer`,
          `Product Designer`,
          `UI/UX Designer`,
        ]}
      />
      <PageTransition>
        {/* Beginning of Hero */}
        <section className="main-wrap mx-auto pos-r">
          <div className="min-height-100-vh d-flx flex-dir-col j-c-c wrapper-x">
            <div className="d-flx flex-dir-col j-c-c offset-hero">
              <p className="largetext mb-0 greeting">
                Hello. I’m Dennis Dickson.
              </p>
              <h1 className="very-large-text co-white ff-aquire">
                UI Engineer
              </h1>
              <p className="maxwidth-tb hero-text mediumtext">
                Egestas semper lorem sit quis vestibulum nulla sit quis. At
                aliquam, arcu scelerisque cursus. Amet cursus risus libero, id
                volutpat in. Sem orci.
              </p>
            </div>
          </div>
          <div className="w-100 d-flx py-1 al-i-c j-c-sb wrapper-x absolute-hero">
            <div className="blue-block"></div>
            <div className="d-flx al-i-c social-links">
              <a
                href="https://linkedin.com/in/psybug"
                className="d-blk prefix is-wider p-h social-link hover-outline ff-aquire link"
                title="LinkedIn"
              >
                LI
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
              </a>
              <a
                href="https://dribbble.com/psybuglite"
                className="d-blk prefix suffix is-wider p-h social-link hover-outline ff-aquire link"
                title="Dribbble"
              >
                DR
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
              </a>
              <a
                href="https://twitter.com/psybuglite"
                className="d-blk suffix is-wider p-h social-link hover-outline ff-aquire link"
                title="Twitter"
              >
                TW
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
              </a>
            </div>
          </div>
        </section>
        {/* End of Hero */}

        {/* Beginning of About Me */}
        <section className="main-wrap mx-auto pos-r">
          <div className="section-wrapper-y will-grow d-flx flex-dir-col j-c-c wrapper-x">
            <div className="grid-2 wrapper-y will-grow">
              <p className="largetext stripes">
                At the core, I combine business logic and design to create a
                user-facing product. In order to successfully achieve this, I
                focus on generating quality user experience with modern and
                accessible user interfaces that help to meet business
                requirements.
              </p>
              <div className="email-grid">
                <a
                  href="mailto:hi@dennisdickson.com"
                  className="smalltext link email-link"
                >
                  hi@dennisdickson.com
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
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End of About Me */}

        {/* Beginning of What I Do */}
        <section className="main-wrap mx-auto pos-r section-wrapper-y will-grow">
          <div className="wrapper-x">
            <h2 className="sectionhead-text tx-c mb-3">What I Do</h2>
            <div className="grid is-multi-col mostly-3 wrapper-y will-grow">
              <div className="d-flx flex-dir-col al-i-c">
                <svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width={50} height={50} fill="#0F52BA" />
                </svg>
                <h3 className="largetext ff-aquire co-white tx-c mt-3">
                  UI/UX &amp; <br /> Product Design
                </h3>
                <p className="mt-1 tx-c">
                  For the past couple of years, I have been teaming up with
                  creative teams, from web startups to industries to help build
                  their brand &amp; website.
                </p>
              </div>
              <div className="d-flx flex-dir-col al-i-c">
                <svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width={50} height={50} fill="#0F52BA" />
                </svg>
                <h3 className="largetext ff-aquire co-white tx-c mt-3">
                  Mobile App <br />
                  Development
                </h3>
                <p className="mt-1 tx-c">
                  For the past couple of years, I have been teaming up with
                  creative teams, from web startups to industries to help build
                  their brand &amp; website.
                </p>
              </div>
              <div className="d-flx flex-dir-col al-i-c">
                <svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width={50} height={50} fill="#0F52BA" />
                </svg>
                <h3 className="largetext ff-aquire co-white tx-c mt-3">
                  Frontend <br />
                  Development
                </h3>
                <p className="mt-1 tx-c">
                  For the past couple of years, I have been teaming up with
                  creative teams, from web startups to industries to help build
                  their brand &amp; website.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End of What I Do */}

        {/* Beginning of Latest Work */}
        <section className="main-wrap mx-auto pos-r section-wrapper-y will-grow mb-3">
          <div className="wrapper-x">
            <h2 className="sectionhead-text tx-c mb-3">
              <span className="work-left-span d-ibl">Featured</span> <br />
              <span className="work-right-span d-ibl">Work</span>
            </h2>
            <div className="wrapper-y will-grow">
              <div className="featured-project mb-2">
                <p className="mediumtext m-0">
                  <span className="co-sweetblue">SAAS</span> --{" "}
                  <span className="">Product Design</span>
                </p>
                <p className="largetext co-white ff-aquire">Payflow</p>
                <Link
                  to="/work/payflow"
                  className="d-blk project-feature-image desired-height bg-brandblue"
                >
                  <img src={payflowFeature} alt="Swinvoice" />
                </Link>
              </div>
              <Link to="/work/payflow" className="d-blk">
                <div className="slide-project project-item mb-2">
                  <div className="project-feature-image bg-brandblue desired-height-1qtr"></div>
                  <div>
                    <p className="mediumtext">
                      <span className="co-sweetblue">SAAS</span> <br />
                      <span className="co-readablegray">Mobile App Design</span>
                    </p>
                    <p className="largetext co-white ff-aquire">FLUIDCOINS</p>
                  </div>
                </div>
              </Link>
              <Link to="/work/payflow" className="d-blk">
                <div className="slide-project project-item mb-2">
                  <div className="proj-feature-image bg-brandblue desired-height-1qtr"></div>
                  <div className="proj-details">
                    <p className="mediumtext">
                      <span className="co-sweetblue">SAAS</span> <br />
                      <span className="co-readablegray">Mobile App Design</span>
                    </p>
                    <p className="largetext co-white ff-aquire">PayFlow</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        {/* End of Latest Work */}

        {/* Beginning of Trusted Clients */}
        <section className="main-wrap mx-auto pos-r section-wrapper-y wrapper-x will-grow mb-3">
          <div className="">
            <h2 className="sectionhead-text trust tx-c m-0">Trusted By</h2>
            <div className="brand-grid pos-a w-100 a-top">
              <div className="brand-area d-flx flex-dir-col al-i-c j-c-c">
                <div className="brand-icon">
                  <img src={future} alt="future" />
                </div>
                <p className="smalltext tx-c ff-aquire co-white mt-1">
                  Future Technology
                </p>
              </div>
              <div className="brand-area d-flx flex-dir-col al-i-c j-c-c">
                <div className="brand-icon">
                  <img src={zoafia} alt="zoafia" />
                </div>
                <p className="smalltext tx-c ff-aquire co-white mt-1">Zoafia</p>
              </div>
              <div className="brand-area d-flx flex-dir-col al-i-c j-c-c">
                <div className="brand-icon">
                  <img src={cns} alt="cns" />
                </div>
                <p className="smalltext tx-c ff-aquire co-white mt-1">
                  CNS-Marine Nigeria
                </p>
              </div>
              <div className="brand-area d-flx flex-dir-col al-i-c j-c-c">
                <div className="brand-icon">
                  <img src={fluidcoins} alt="fluidcoins" />
                </div>
                <p className="smalltext tx-c ff-aquire co-white mt-1">
                  Fluidcoins
                </p>
              </div>
              <div className="brand-area d-flx flex-dir-col al-i-c j-c-c">
                <div className="brand-icon">
                  <img src={arq} alt="arq" />
                </div>
                <p className="smalltext tx-c ff-aquire co-white mt-1">
                  ARQ Dev. Corp.
                </p>
              </div>
              <div className="brand-area d-flx flex-dir-col al-i-c j-c-c">
                <div className="brand-icon">
                  <img src={prodevs} alt="prodevs" />
                </div>
                <p className="smalltext tx-c ff-aquire co-white mt-1">
                  ProDevs
                </p>
              </div>
              <div className="brand-area d-flx flex-dir-col al-i-c j-c-c">
                <div className="brand-icon">
                  <img src={secura} alt="secura" />
                </div>
                <p className="smalltext tx-c ff-aquire co-white mt-1">Secura</p>
              </div>
              <div className="brand-area bg-primary"></div>
            </div>
          </div>
        </section>
        {/* End of Trusted Clients */}

        {/* Beginning of UI Stories */}
        <WritingHome />
        {/* End of UI Stories */}

        {/* Beginning of FAQs */}
        <section className="main-wrap mx-auto pos-r section-wrapper-y will-grow mb-3">
          <div className="wrapper-x">
            <div className="">
              <h2 className="sectionhead-text tx-c mb-3">FAQs</h2>
            </div>
            <div className="faqs-bg faqs-grid">
              <div>
                <h3 className="co-white mb-2">
                  What are you doing in September?
                </h3>
                <p>
                  I’m working alongside other designers and engineers creating a
                  design system for Protocoh. Having multiple projects under the
                  same umbrella really needed it. I recommend that you check out{" "}
                  <strong>
                    <em>
                      <a
                        href="https://www.smashingmagazine.com/design-systems-book/"
                        className="link inline-link"
                      >
                        Alla Khomaltova’s book
                      </a>
                    </em>
                  </strong>{" "}
                  on Design Systems if you’re new to the topic.{" "}
                </p>
              </div>
              <div>
                <h3 className="co-white mb-2">
                  What are you doing in September?
                </h3>
                <p>
                  I’m working alongside other designers and engineers creating a
                  design system for Protocoh. Having multiple projects under the
                  same umbrella really needed it. I recommend that you check out{" "}
                  <strong>
                    <em>
                      <a
                        href="https://www.smashingmagazine.com/design-systems-book/"
                        className="link inline-link"
                      >
                        Alla Khomaltova’s book
                      </a>
                    </em>
                  </strong>{" "}
                  on Design Systems if you’re new to the topic.{" "}
                </p>
              </div>
              <div>
                <h3 className="co-white mb-2">
                  What are you doing in September?
                </h3>
                <p>
                  I’m working alongside other designers and engineers creating a
                  design system for Protocoh. Having multiple projects under the
                  same umbrella really needed it. I recommend that you check out{" "}
                  <strong>
                    <em>
                      <a
                        href="https://www.smashingmagazine.com/design-systems-book/"
                        className="link inline-link"
                      >
                        Alla Khomaltova’s book
                      </a>
                    </em>
                  </strong>{" "}
                  on Design Systems if you’re new to the topic.{" "}
                </p>
              </div>
              <div>
                <h3 className="co-white mb-2">
                  What are you doing in September?
                </h3>
                <p>
                  I’m working alongside other designers and engineers creating a
                  design system for Protocoh. Having multiple projects under the
                  same umbrella really needed it. I recommend that you check out{" "}
                  <strong>
                    <em>
                      <a
                        href="https://www.smashingmagazine.com/design-systems-book/"
                        className="link inline-link"
                      >
                        Alla Khomaltova’s book
                      </a>
                    </em>
                  </strong>{" "}
                  on Design Systems if you’re new to the topic.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End of FAQs */}
      </PageTransition>
    </Layout>
  )
}

export default IndexPage
