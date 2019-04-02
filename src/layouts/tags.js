import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"


import SEO from "../components/seo"
import Layout from "../components/layout"
import Footer from "../components/footer"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${tag}  —  ${totalCount} post${
    totalCount === 1 ? "" : "s"
  }`

  return (
    <Layout>
    <SEO title="Tags" />
    
      <section className="width-100-pc hide-flow-x main-top">
        <div className=" maxwidth-sl wrapper-x clearfix writing-m-top mx-auto">
          <div className="left-70">
            <h2 className="py-2">
              {tagHeader}
            </h2>

            <ul className="none blog-list">
                {edges.map(({ node }) => {
                const { slug } = node.fields
                const { title } = node.frontmatter
                const { path } = node.frontmatter
                const { date } = node.frontmatter
                return (
                  <li className="borderline-bottom py-1 mb-1" key={slug}>
                      <span className="fw-bold picotext">{date}</span>
                      <h4 className="m-0 largetext fw-normal">
                        <Link to={path} className="py-h mb-h d-blk co-richblack">
                          {title}
                        </Link>
                      </h4>
                    </li>
                  )
                })}
            </ul>
            <div className="py-2">
              <Link to="/tags">All tags</Link>
            </div>
          </div>
        </div>
      </section>
    <Footer />
  </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
          }
        }
      }
    }
  }
`