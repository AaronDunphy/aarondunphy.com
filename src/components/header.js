import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header style={{margin: `0 0 40px 0`}}>
    <Link to="/" style={{
        textDecoration: `none`,
        fontSize: 24,
        fontWeight: 700,
    }}>
        Aaron Dunphy
    </Link>
  </header>
)

export default Header