import { Link } from "gatsby"
import React from "react"

const Header = () => (
<header style={{
    margin: `0 0 60px 0`,
    display: 'flex',
    justifyContent: 'space-between'
}}>
    <div>
        <Link to="/" style={{
            textDecoration: `none`,
            fontSize: 28,
            fontWeight: 700,
        }}>
            Aaron Dunphy
        </Link>
    </div>
    <nav>
        <ul style={{
            listStyle: 'none',
            margin: 0
        }}>
            <li style={{ display: 'inline-block', marginRight: 20}}>
                <Link to="/" style={{
                    textDecoration: `none`,
                    fontSize: 18,
                }}>
                    Home
                </Link>
            </li>
            <li style={{ display: 'inline-block', marginRight: 20}}>
                <Link to="/about" style={{
                    textDecoration: `none`,
                    fontSize: 18,
                }}>
                    About
                </Link>
            </li>
            <li style={{ display: 'inline-block', marginRight: 20}}>
                <Link to="/blog" style={{
                    textDecoration: `none`,
                    fontSize: 18,
                }}>
                    Blog
                </Link>
            </li>
            <li style={{ display: 'inline-block', marginRight: 0}}>
                <Link to="/uses" style={{
                    textDecoration: `none`,
                    fontSize: 18,
                }}>
                    Uses
                </Link>
            </li>
        </ul>
    </nav>
</header>
)

export default Header