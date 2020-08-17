import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const BlogPage = (data) => {

    const { nodes } = data.data.allMarkdownRemark
    const posts = nodes.map((node, index) => (
        <div key={index} style={{marginBottom: 40}}>
            <h3 style={{marginBottom: 5}}>
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
            <Header />
            <h1>Blog</h1>
            <div style={{marginTop: 60}}>
                { posts }
            </div>
        </Layout>
    )
}

export default BlogPage

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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