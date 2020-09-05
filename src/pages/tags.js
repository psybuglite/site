import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import { motion, AnimatePresence } from "framer-motion"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <>
    <SEO title="Tags | Writing | Dennis Dickson" />
    <section className="width-100-pc page-padding">
      <div className=" maxwidth-sl desired-height-1qtr wrapper-x writing-m-top mx-auto">
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
  </>
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