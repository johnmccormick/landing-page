// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = (props: PageProps) => (
  <Layout>
    <SEO title="Contact" />
    <h2>Contact</h2>
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Back</Link>
  </Layout>
)

export default Contact
