import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Img from "gatsby-image"

const WritingHome = () => {
  return (
    <StaticQuery
      query={graphql`
      query shortBlogListQuery {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
          edges {
            node {
              id
              excerpt(truncate: true, pruneLength: 200, format: HTML)
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                tags
                featimage {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
      render={data => (

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
          <ul className="none">
            {data.allMarkdownRemark.edges
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                let featuredimage = post.frontmatter.featimage
                return (
                  <li className="article wrapper-y my-1" key={post.id}>
                    <div className="article-image">
                    {
                      featuredimage && (
                        <Img 
                          style={{ height: "100%" }}
                          imgStyle={{ objectFit: "cover" }}
                          fluid={featuredimage.childImageSharp.fluid} 
                          />
                      )
                    }
                    </div>
                    <div>
                      <Link
                        to={post.frontmatter.path}
                        className="link article-link"
                      >
                        <h3 className="mt-0 largetext co-white">
                          {post.frontmatter.title}
                        </h3>
                      </Link>
                      <div className="article-excerpt"
                        dangerouslySetInnerHTML={{ __html: post.excerpt }}>
                      </div>
                      <span className="ff-aquire co-white">
                        {post.frontmatter.date}
                      </span>
                      <div className="fw-bold picotext mt-1 d-flx">
                        {post.frontmatter.tags.map(function(tag) {
                          return (
                            <Link
                              to={`/tags/${kebabCase(tag)}/`}
                              className="link co-sweetblue prefix is-even-wider my-0"
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
      </div>
    </section>
      )}
    />
  )
}

export default WritingHome