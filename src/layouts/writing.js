import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTransition from 'gatsby-v2-plugin-page-transitions'

const Writing = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges
  var allTags = []
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1
      ? "/writing/"
      : `/writing/${(currentPage - 1).toString()}`
  const nextPage = `/writing/${(currentPage + 1).toString()}`

  posts.map(function getTags({ node: post }) {
    post.frontmatter.tags.forEach(tag => {
      allTags.push(tag)
    })
    return allTags
  })

  function getUnique(array) {
    var uniqueArray = []
    // Loop through array values
    for (var value of array) {
      if (uniqueArray.indexOf(value) === -1) {
        uniqueArray.push(value)
      }
    }
    return uniqueArray
  }
  const uniqueTags = getUnique(allTags)

  return (
    <PageTransition>
      <Layout>
        <SEO title="Writing" />
        <section className="width-100-pc page-padding will-grow">
          <div className="main-wrap mx-auto">
            <h2 className="sectionhead-text tx-c mb-3">UI Stories</h2>
            <div className="wrapper">
              <ul className="none">
                {posts
                  .filter(post => post.node.frontmatter.title.length > 0)
                  .map(({ node: post }) => {
                    return (
                      <li className="article wrapper-y mb-2" key={post.id}>
                        <div className="article-image"></div>
                        <div>
                          <Link to={post.frontmatter.path} className="link article-link">
                            <h3 className="mt-0 largetext co-white">
                              {post.frontmatter.title}
                            </h3>
                          </Link>
                          <p className="article-excerpt">{post.excerpt}</p>
                          <span className="ff-aquire co-white">{post.frontmatter.date}</span>
                          <div className="fw-bold picotext mt-1 d-flx">
                            {post.frontmatter.tags.map(function(tag) {
                              return (
                                <Link
                                  to={`/tags/${kebabCase(tag)}/`}
                                  className="link co-primary prefix is-even-wider my-0"
                                  key={tag}
                                >
                                  #{tag}
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      </li>
                    )
                  })}
              </ul>
            </div>
            <div className="wrapper">
              <h3 className="pb-1">Popular tags</h3>
              <ul className="none fw-bold">
                {uniqueTags.map((tag, i) => (
                  <li className="tag-item prefix is-even-wider" key={i}>
                    <Link
                      to={`/tags/${kebabCase(tag)}/`}
                      className="link d-flx al-i-c co-primary"
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="main-wrap wrapper mx-auto">
            <div className="d-flx al-i-c pagination-container j-c-sb">
              <div className="prev-6">
                {!isFirst && (
                  <Link to={prevPage} rel="prev" className="link writing-pagination link d-flx al-i-c">
                    <span className="prefix is-wider">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevrons-left"
                      >
                        <polyline points="11 17 6 12 11 7" />
                        <polyline points="18 17 13 12 18 7" />
                      </svg>
                    </span>
                    <p className="mediumtext m-0">
                      Previous 6
                    </p>
                  </Link>
                )}
              </div>

              {
                <p className="numbering my-1">
                  Page {currentPage} of {numPages}
                </p>
              }

              <div className="next-6">
                {!isLast && (
                  <Link to={nextPage} rel="next" className="link writing-pagination link d-flx al-i-c">
                    <p className="mediumtext m-0">
                      Next 6
                    </p>
                    <span className="prefix suffix is-wider">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevrons-right"
                      >
                        <polyline points="13 17 18 12 13 7" />
                        <polyline points="6 17 11 12 6 7" />
                      </svg>
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  )
}

export default Writing

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            readingTime {
              text
            }
          }
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
          }
        }
      }
    }
  }
`
