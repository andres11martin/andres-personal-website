import { Link } from "gatsby"
import "./header.css"
import React from "react"

const Header = () => (
  <header className="header">

    <h1 className="home">
      <Link to="/">
        HOME
        </Link>
    </h1>
    <h1 className="about">
      <Link to="/about">
        ABOUT
      </Link>
    </h1>
    <h1 className="projects">
      <Link to="/projects">
        PROJECTS
      </Link>
    </h1>

  </header>
)

export default Header
