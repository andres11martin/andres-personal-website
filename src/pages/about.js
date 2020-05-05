import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about.css"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="wrapper">
      <div className="content">
        <div className="text">
          <h1>I COME FROM AN ARTISTIC BACKGROUND: FILMMAKING.</h1>
          <br />
          <br />
          <br />
          <br />
          <h1>SELF-MOTIVATED EXPLORER. LOVER OF GROUP-WORKING.</h1>
          <br />
          <br />
          <br />
          <h1>SPANISH, ENGLISH & FRENCH. I CAN (AND I ACTUALLY WOULD LOVE TO) COMMUNICATE AND WORK WITH PEOPLE WITH THIS LANGUAGES.</h1>
          <br />
          <br />
          <br />
          <Link to="/projects">Let's see some projects</Link>
          <br />
          <br />
          <br />
          <br />
          <br />

        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
