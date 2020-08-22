import React from "react"
import Container from "./styles/container"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => (
    <footer style={{
        backgroundColor: '#082333',
        margin: `60px 0 0px 0`,
        padding: `6% 0px`,
        fontSize: 14,
        color: `#8fa6b2`,
    }}>
        <Container>
            <div style={{textAlign: `center`}}>
                <div style={{marginBottom: 20}}>
                    <a href="https://twitter.com/aarondunphy" target="_blank" style ={{
                        color: `#8fa6b2`,
                        fontSize: 24,
                        marginRight: 20
                    }}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://github.com/aarondunphy" target="_blank" style ={{
                        color: `#8fa6b2`,
                        fontSize: 24,
                        marginRight: 20
                    }}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/aarondunphy" target="_blank" style ={{
                        color: `#8fa6b2`,
                        fontSize: 24,
                        marginRight: 20
                    }}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://instagram.com/aarondunphy" target="_blank" style ={{
                        color: `#8fa6b2`,
                        fontSize: 24,
                    }}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <p style={{fontSize: 16}}>&copy; Aaron Dunphy { new Date().getFullYear() }</p>
                <p style={{marginBottom: 0}}>Built with <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a> &amp; ☕️</p>
            </div>
        </Container>
    </footer>
)

export default Footer