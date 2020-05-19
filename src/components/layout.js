/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{
        maxWidth: 960,
        textAlign: `center`,
        padding: `0 1.0875rem 1.45rem`,
        margin: `40px auto`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`
      }}>
        <h1 style={{ color: `#f1faee` }}>John McCormick</h1>
        <main
          style={{
            minWidth: `50%`,
            textAlign: `center`,
          }}
        >
          {children}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
