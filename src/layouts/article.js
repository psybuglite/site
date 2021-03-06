import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import Img from "gatsby-image"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

export default function Template({ pageContext, data }) {
  const { markdownRemark: post } = data // data.markdownRemark holds post data
  const { next, prev } = pageContext

  return (
    <>
      <Helmet title={`${post.frontmatter.title}`} />
      <section className="width-100-pc page-padding">
        <div className="main-wrap mx-auto wrapper">
          <div className="article-banner maxwidth-sl mx-auto">
            {post.frontmatter.featimage && (
              <Img
                style={{ height: "100%" }}
                imgStyle={{ objectFit: "cover" }}
                fluid={post.frontmatter.featimage.childImageSharp.fluid}
              />
            )}
          </div>
          <div className="maxwidth-sl mx-auto d-flx j-c-sb">
            <div>
              <h2 className="mt-0 largertext co-white fw-normal">
                {post.frontmatter.title}
              </h2>
              <span className="fw-bold picotext">{post.frontmatter.date}</span>
            </div>
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
          <article
            className="wrapper-y will-grow articletext article-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></article>
          <div className="main-wrap mx-auto wrapper-y d-flx fw-w j-c-sb mt-1">
            <div className="my-1">
              {next && (
                <Link
                  to={next.frontmatter.path}
                  className="link article-left-nav d-flx al-i-c next-prev"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-arrow-left"
                    >
                      <line x1={19} y1={12} x2={5} y2={12} />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                  </span>
                  <p className="suffix is-wider">{next.frontmatter.title}</p>
                </Link>
              )}
            </div>
            <div className="my-1">
              {prev && (
                <Link
                  to={prev.frontmatter.path}
                  className="link tx-c article-right-nav j-c-fe d-flx al-i-c next-prev"
                >
                  <p className="prefix mb-0 is-wider">
                    {prev.frontmatter.title}
                  </p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-arrow-right"
                    >
                      <line x1={5} y1={12} x2={19} y2={12} />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featimage {
          childImageSharp {
            fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
