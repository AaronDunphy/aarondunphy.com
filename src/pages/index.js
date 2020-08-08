import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (data) => {

    const { nodes } = data.data.allMarkdownRemark
    const posts = nodes.map((node, index) => (
        <div key={index} style={{marginBottom: 40}}>
            <h3 style={{marginBottom: 10}}>
                <Link to={ node.frontmatter.slug }>
                    { node.frontmatter.title }
                </Link>
            </h3>
            <p style={{margin: 0}}><small>{ node.frontmatter.date }</small></p>
            <p>{ node.frontmatter.description }</p>

        </div>
    ))
    
    return (
        <Layout>
            <SEO title="Home" />
            <p style={{fontSize: 40, fontWeight: 700, marginBottom: 20}}>Hey, I'm Aaron 👋</p>
            <h1 style={{
                margin: `0 0 5px 0`,
                fontSize: 24
            }}>
                Full Stack Developer based in Leigh-on-Sea, UK.
            </h1>
            <p>Laravel &amp; JavaScript. Powered by ☕️</p>
            <div style={{marginTop: 60}}>
                { posts }
            </div>
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    title
                    date(formatString: "DD MMMM YYYY")
                    description
                    slug
                }
            }
        }
    }
`