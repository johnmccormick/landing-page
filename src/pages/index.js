import React from "react"

import Layout from "../components/layout"
import Widget from "../components/widget"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Developer" />
    <h2>Developer</h2>
    <Widget style={{backgroundColor: `white`}} link="contact" text="contact" />
    <Widget url="https://github.com/johnmccormick" text="github" />
    <Widget url="https://tv-roulette.herokuapp.com" text="tv roulette" />
    <Widget url="https://johnmccormick.github.io/fractal-cubes/" text="fractal cubes" />
    <Widget url="https://johnmccormick.github.io/plant/" text="plant" />
    <Widget url="https://disciplesofwren.com" text="disciples of wren" />
    <Widget url="https://johnmccormick.github.io/lightcycles/" text="light cycles" />
  </Layout>
)

export default IndexPage
