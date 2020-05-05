import React from "react"
import { Link } from "gatsby"
import Intro from "../components/intro"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => {


  return (
    <div>
      <Intro />
      <Layout>
        <SEO title="Home" />
        <div className="wrapper">
          <div className="content">
            <div className="text">
              <h1>I'M ANDRÉS MARTÍN, A DEVELOPER FROM MONTEVIDEO, URUGUAY.</h1>
              <br />
              <br />
              <br />
              <br />
              <h1>I REALLY LOVE CODING, I REALLY DO. PLEASE BELIEVE ME. CODING IS MY PASSION. FOR REAL.</h1>
              <br />
              <br />
              <br />
              <br />
              <Link to="/about">Read full story</Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
