import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const AboutPage = () => (
    <Layout>
        <SEO title="Home" />
        <Header />
        
        <h1>About</h1>
        <p>I'm a full stack developer based in <a href="https://en.wikipedia.org/wiki/Leigh-on-Sea" target="_blank">Leigh-on-Sea</a>, UK. I have a passion for coding and get most enjoyment from solving problems with writing elegant/maintainable code and sharing knowledge. I love learning so I'm always keeping up to date by watching conference talks, listening to podcasts and reading blog posts.</p>
        
        <p>My coding journey started unexpectedly in my first year of University in 2012. I went to uni for graphic design but in our first year we had to build a basic website and I thought writing code was so cool. I was hooked so I switched my degree to Web Technologies. I've been working in the industry since graduating in 2015 with a first class honours.</p>

        <p>Outside of work I love walking our <a href="https://www.instagram.com/p/CA0Kd23luxl/" target="_blank">cocker spaniel</a>, drinking coffee, watching Formula 1 and being outdoors.</p>
    </Layout>
)

export default AboutPage