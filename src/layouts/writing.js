import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"


export default function Writing({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges

  var allTags = []

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/writing/" : `/writing/${(currentPage - 1).toString()}`
  const nextPage = `/writing/${(currentPage + 1).toString()}`

  posts.map(function getTags ({ node: post }) {
    post.frontmatter.tags.forEach(tag =>{
      allTags.push(tag)
    })

    return allTags
  })

  function getUnique(array){
    var uniqueArray = [];
    
    // Loop through array values
    for(var value of array){
        if(uniqueArray.indexOf(value) === -1){
            uniqueArray.push(value);
        }
    }
    return uniqueArray;
  }

  
  const uniqueTags = getUnique(allTags);

  return (
    <Layout>
    <SEO title="Writing" />
    
    <section className="width-100-pc hide-flow-x main-top">
        <div className="clearfix maxwidth-sl work-top mx-auto">
          <div className="left-80 wrapper">
            <ul className="none blog-list">

              {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                  return (
                    <li className="borderline-bottom py-1 mb-1" key={post.id}>
                      <div className="d-flx al-i-c">
                      <span className="fw-bold picotext m-0">{post.frontmatter.date}</span> 
                      <span className="prefix suffix is-wider">|</span>
                      <span className="fw-bold picotext m-0">{post.fields.readingTime.text}</span>
                      </div>
                      <h4 className="m-0 largetext fw-normal">
                        <Link to={post.frontmatter.path} className="py-h mb-h d-ibl co-primary">
                          {post.frontmatter.title}
                        </Link>
                      </h4>
                      <p>
                        {post.excerpt}
                      </p>
                      <div className="fw-bold picotext d-flx">
                        {
                          post.frontmatter.tags.map(function(tag) {
                            return (
                              <Link to={`/tags/${kebabCase(tag)}/`} className="co-primary prefix is-wider my-0" key={tag}>
                                #{tag}
                              </Link>
                            )
                          })
                        }
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="right-20 wrapper">
            <h3>Popular tags</h3>
              <ul className="none fw-bold">


                  {
                    
                    uniqueTags.map((tag, i) => (
                      <li className="tag-item prefix is-wider" key={i}>
                        <Link to={`/tags/${kebabCase(tag)}/`} className="d-flx al-i-c co-primary">
                          {tag}
                        </Link>
                      </li>
                    ))
                  
                  }
                  
                          
                        
                     
            </ul>
          </div>
        </div>
        <div className="clearfix maxwidth-tb wrapper mx-auto">
          <div className="d-flx al-i-c j-c-c fw-w py-2">

            {!isFirst && (
              <Link to={prevPage} rel="prev">
                <span className="writing-nav-icon p-h">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-left">
                  <polyline points="11 17 6 12 11 7" />
                  <polyline points="18 17 13 12 18 7" />
                </svg>
                </span>
              </Link>
            )}

            {Array.from({ length: numPages }, (_, i) => (
              <Link key={`pagination-number${i + 1}`} to={`/writing/${i === 0 ? "" : i + 1}`}  activeClassName="active">
                <span className="writing-nav-icon">
                  {i + 1}
                </span>
              </Link>
            ))}

            {!isLast && (
              <Link to={nextPage} rel="next">
                <span className="writing-nav-icon p-h">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevrons-right">
                  <polyline points="13 17 18 12 13 7" />
                  <polyline points="6 17 11 12 6 7" />
                </svg>
              </span>
              </Link>
            )}            
          </div>
        </div>
      </section>
      <Footer />
  </Layout>
  )
}

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