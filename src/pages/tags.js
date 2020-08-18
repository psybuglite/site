import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PageTransition from 'gatsby-v2-plugin-page-transitions'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <SEO title="Tags | Tonye Dickson | Frontend Designer and Developer." />
    <PageTransition>
      <section className="width-100-pc page-padding">
        <div className=" maxwidth-sl desired-height-1qtr wrapper-x writing-m-top mx-auto">
          <h2 className="py-2">All tags</h2>
          <ul className="none fw-bold">
            {group.map(tag => (
              <li className="tag-item prefix is-even-wider" key={tag.fieldValue}>
                <Link
                  to={`/tags/${kebabCase(tag.fieldValue)}/`}
                  className="link d-flx al-i-c co-primary"
                >
                  {tag.fieldValue}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageTransition>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`