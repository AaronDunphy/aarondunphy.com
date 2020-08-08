import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (data) => {

    const { nodes } = data.data.allMarkdownRemark
    console.log('nodes', nodes)
    const posts = nodes.map((node, index) => {
        return (
            <div key={index}>
                <h3 style={{margin: 0}}>
                    <Link
                        to={ node.frontmatter.slug }
                        style={{
                            color: "black",
                        }}
                    >
                        { node.frontmatter.title }
                    </Link>
                </h3>
                <p>{ node.frontmatter.description }</p>

            </div>
        )
    })
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
            { posts }
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
                    description
                    slug
                }
            }
        }
    }
`