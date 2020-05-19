import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../styles/custom-layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
        margin: `40px auto`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`
      }}>
        <main>
          <h1 style={{ color: `#f1faee` }}>{data.site.siteMetadata.title}</h1>
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
