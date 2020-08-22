import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import About from "../components/styles/about"

const AboutPage = (props) => {
    const data = useStaticQuery(graphql`
        query {
        placeholderImage: file(relativePath: { eq: "aarondunphy.png" }) {
            childImageSharp {
            fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
    `)
    console.log('ddd', data)
    return (
        <Layout>
            <SEO title="Home" />
            <Header />
            <About>
                <h1>About</h1>

                <div className="profileImage">
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                </div>

                <p>I'm a full stack developer based in <a href="https://en.wikipedia.org/wiki/Leigh-on-Sea" target="_blank">Leigh-on-Sea</a>, UK. I have a passion for coding and get most enjoyment from solving problems with writing elegant/maintainable code and sharing knowledge. I love learning so I'm always keeping up to date by watching conference talks, listening to <Link to="/blog/my-top-5-tech-podcasts-2020">podcasts</Link> and reading blog posts.</p>
                
                <p>My coding journey started unexpectedly in my first year of University in 2012. I went to uni for graphic design but in our first year we had to build a basic website and I thought writing code was so cool. I was hooked so I switched my degree to Web Technologies. I've been working in the industry since graduating in 2015 with a first class honours.</p>

                <p>Outside of work I love walking our <a href="https://www.instagram.com/p/CA0Kd23luxl/" target="_blank">cocker spaniel</a>, drinking coffee, watching Formula 1 and being outdoors.</p>
            </About>
        </Layout>
    )
}

export default AboutPage