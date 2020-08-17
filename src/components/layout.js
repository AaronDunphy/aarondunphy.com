/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => (
    <>
      <div
        style={{
            margin: `20px auto 0 auto`,
            maxWidth: 800,
            padding: `0px 20px`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
)

export default Layout