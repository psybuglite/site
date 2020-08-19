import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTransition from 'gatsby-v2-plugin-page-transitions'
import gsap from 'gsap/all'

import cns from "../images/cns.png"
import arq from "../images/arq.png"
import zoafia from "../images/zoafia.png"
import fluidcoins from "../images/fluidcoins.png"
import prodevs from "../images/prodevs.png"
import secura from "../images/secura.png"
import future from "../images/future.png"

const IndexPage = () => (

  useEffect(() => {
    gsap.from(".logo-area", {opacity: 0, y: -50, duration: 0.5})
    gsap.from(".main-nav li", {opacity: 0, stagger: 0.1, x: -50, duration: 0.3, delay: 0.2})
    gsap.from(".bar1", {opacity: 0, x: -50, duration: 0.5, delay: 0.3})
    gsap.from(".bar3", {opacity: 0, x: 50, duration: 0.5, delay: 0.3})
    gsap.from(".social-links a", {opacity: 0, y: 50, stagger: 0.2, duration: 0.3, delay: 1})
    gsap.from(".very-large-text", {opacity: 0, x: 100, duration: 0.5, delay: 0.5})
    gsap.from(".greeting", {opacity: 0, x: 100, duration: 0.5, delay: 0.9})
    gsap.from(".hero-text", {opacity: 0, x: 100, duration: 0.5, delay: 1})
    
  }, []), // eslint-disable-line

    <PageTransition>
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
      {/* Beginning of Hero */}
      <section className="main-wrap mx-auto pos-r">
        <div className="min-height-100-vh d-flx flex-dir-col j-c-c wrapper-x">
          <div className="d-flx flex-dir-col j-c-c offset-hero">
            <p className="largetext mb-0 greeting">Hello. I’m Dennis Dickson.</p>
            <h1 className="very-large-text co-white ff-aquire">UI Engineer</h1>
            <p className="maxwidth-tb hero-text mediumtext">
              Egestas semper lorem sit quis vestibulum nulla sit quis. At aliquam,
              arcu scelerisque cursus. Amet cursus risus libero, id volutpat in.
              Sem orci.
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
              user-facing product. In order to successfully achieve this, I focus
              on generating quality user experience with modern and accessible
              user interfaces that help to meet business requirements.
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
          <h2 className="sectionhead-text mb-3">What I Do</h2>
          <div className="grid is-multi-col mostly-3 wrapper-y will-grow">
            <div>
              <svg
                width={50}
                height={50}
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={50} height={50} fill="#0F52BA" />
              </svg>
              <h3 className="largetext ff-aquire co-white mt-3">
                UI/UX &amp; <br /> Product Design
              </h3>
              <p className="mt-1 ">
                For the past couple of years, I have been teaming up with creative
                teams, from web startups to industries to help build their brand
                &amp; website.
              </p>
            </div>
            <div>
              <svg
                width={50}
                height={50}
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={50} height={50} fill="#0F52BA" />
              </svg>
              <h3 className="largetext ff-aquire co-white mt-3">
                Mobile App <br />
                Development
              </h3>
              <p className="mt-1 ">
                For the past couple of years, I have been teaming up with creative
                teams, from web startups to industries to help build their brand
                &amp; website.
              </p>
            </div>
            <div>
              <svg
                width={50}
                height={50}
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={50} height={50} fill="#0F52BA" />
              </svg>
              <h3 className="largetext ff-aquire co-white mt-3">
                Frontend <br />
                Development
              </h3>
              <p className="mt-1 ">
                For the past couple of years, I have been teaming up with creative
                teams, from web startups to industries to help build their brand
                &amp; website.
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
            Latest <br /> Work
          </h2>
          <div className="wrapper-y">
            <div className="featured-project"></div>
            <div className="slide-project"></div>
          </div>
        </div>
      </section>
      {/* End of Latest Work */}

      {/* Beginning of Trusted Clients */}
      <section className="main-wrap mx-auto pos-r section-wrapper-y will-grow mb-3">
        <div className="wrapper-x">
          <h2 className="sectionhead-text tx-c mb-3">Trusted By</h2>
          <div className="brand-grid wrapper-y">
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
              <p className="smalltext tx-c ff-aquire co-white mt-1">Fluidcoins</p>
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
              <p className="smalltext tx-c ff-aquire co-white mt-1">ProDevs</p>
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
      <section className="main-wrap mx-auto pos-r section-wrapper-y will-grow">
        <div className="wrapper-x">
          <div className="d-flx j-c-sb fw-w al-i-c">
            <h2 className="sectionhead-text mb-3">UI Stories</h2>
            <Link
              to="/writing"
              className="p-h ff-aquire co-white social-link hover-outline link"
              title="More Articles"
            >
              All Stories
            </Link>
          </div>
          <div className="wrapper-y">
            <div className="article wrapper-y my-2">
              <div className="article-image"></div>
              <div>
                <Link to="/articles" className="link article-link">
                  <h3 className="mt-0 largetext co-white">
                    SVG ANIMATIONS: Basic Steps to your first animations with CSS
                    Keyframes.
                  </h3>
                </Link>
                <p className="article-excerpt">
                  In nullam volutpat cras volutpat vulputate in semper. Gravida
                  elementum dignissim ultrices blandit nulla vitae pellentesque.
                  Est sit volutpat ut fermentum platea mauris. Ultrices proin
                  egestas cursus.
                </p>
                <span className="ff-aquire co-white">03 Jun, 2020</span>
              </div>
            </div>
            <div className="article wrapper-y my-2">
              <div className="article-image"></div>
              <div>
                <Link to="/articles" className="link article-link">
                  <h3 className="mt-0 largetext co-white">
                    Choosing the Design Tools to Work With.
                  </h3>
                </Link>
                <p className="article-excerpt">
                  Non eget et eu id sit fermentum, egestas. Suspendisse elementum
                  interdum nec purus tristique dapibus ac donec. Lorem et quisque
                  rhoncus pellentesque id. Magna sociis faucibus elit vitae
                  viverra congue.
                </p>
                <span className="ff-aquire co-white">03 Jun, 2020</span>
              </div>
            </div>
            <div className="article wrapper-y my-2">
              <div className="article-image"></div>
              <div>
                <Link to="/articles" className="link article-link">
                  <h3 className="mt-0 largetext co-white">
                    JAMstack: What it is and How it Works.
                  </h3>
                </Link>
                <p className="article-excerpt">
                  Sit imperdiet ullamcorper ante commodo facilisi a magna et urna.
                  Massa aenean elementum aliquam habitant velit habitant sed
                  netus. Dui risus facilisis ornare donec. Sit amet sit et turpis
                  augue purus.
                </p>
                <span className="ff-aquire co-white">03 Jun, 2020</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of UI Stories */}

      {/* Beginning of FAQs */}
      <section className="main-wrap mx-auto pos-r section-wrapper-y will-grow mb-3">
        <div className="wrapper-x">
          <div className="">
            <h2 className="sectionhead-text tx-c mb-3">FAQs</h2>
          </div>
          <div className="faqs-bg faqs-grid">
            <div>
              <h3 className="co-white mb-2">What are you doing in September?</h3>
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
              <h3 className="co-white mb-2">What are you doing in September?</h3>
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
              <h3 className="co-white mb-2">What are you doing in September?</h3>
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
              <h3 className="co-white mb-2">What are you doing in September?</h3>
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
    </Layout>
  </PageTransition>
)

export default IndexPage
