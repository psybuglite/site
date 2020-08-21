import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PageTransition from "gatsby-v2-plugin-page-transitions"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${tag}  —  ${totalCount} post${
    totalCount === 1 ? "" : "s"
  }`

  return (
    <Layout>
      <SEO title="Tags" />
      <PageTransition>
        <section className="width-100-pc page-padding">
          <div className=" maxwidth-sl wrapper-x clearfix writing-m-top mx-auto">
            <div className="left-70">
              <h2 className="py-2 largetext">{tagHeader}</h2>
              <ul className="none">
                {edges.map(({ node }) => {
                  const { slug } = node.fields
                  const { title } = node.frontmatter
                  const { path } = node.frontmatter
                  const { date } = node.frontmatter
                  return (
                    <li className="py-1 mb-1" key={slug}>
                      <span className="d-blk ff-aquire picotext">{date}</span>
                      <Link to={path} className="link py-h mb-h d-ibl co-white">
                        <h4 className="m-0 mediumtext d-ibl">{title}</h4>
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <div className="py-2">
                <Link to="/tags" className="co-white linl">
                  All tags
                </Link>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
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
