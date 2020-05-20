import React from "react"

import Layout from "../components/layout"
import Widget from "../components/widget"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Developer" />
    <h2>Developer</h2>
    <Widget link="/contact" title="Contact" />
    <Widget url="https://github.com/johnmccormick" title="Github" />
    <Widget url="https://www.linkedin.com/in/john--mccormick/" title="LinkedIn" />
    <h2>Work</h2>
    <Widget url="https://www.pizzaexpress.com/mobile-pay" title="PizzaExpress: Mobile Pay" subtitle="2020"/>
    <Widget url="https://tv-roulette.herokuapp.com" title="TV Roulette" subtitle="2019"/>
    <h2>Fun stuff</h2>
    <Widget url="https://johnmccormick.github.io/fractal-cubes/" title="Fractal Cubes" subtitle="2020"/>
    <Widget url="https://johnmccormick.github.io/rising-sinking-cubes/" title="Rising Sinking Cubes" subtitle="2020"/>
    <Widget url="https://johnmccormick.github.io/plant/" title="Plant" subtitle="2017"/>
    <Widget url="https://disciplesofwren.com" title="Disciples of Wren" subtitle="2015"/>
    <Widget url="https://johnmccormick.github.io/lightcycles/" title="Light Cycles" subtitle="2011"/>
  </Layout>
)

export default IndexPage
