import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const UsesPage = () => (
    <Layout>
        <Header />
        <SEO title="Uses" />
        
        <h1>Uses</h1>
        
        <h2>Development</h2>
        
        <ul>
            <li>
                <p>VS Code</p>
            </li>
            <li>
                <p>iTerm 2</p>
            </li>
            <li>
                <p>Table Plus</p>
            </li>
            <li>
                <p>Laravel Valet</p>
            </li>
            <li>
                <p>Keeper</p>
            </li>
            <li>
                <p>Homebrew</p>
            </li>
            <li>
                <p>Google Chrome</p>
            </li>
        </ul>

        <h2>Office Setup</h2>

        <ul>
            <li>
                <p>MacBook Pro (15-inch, 2017), 2.9 GHz Quad-Core Intel Core i7, 16 GB memory</p>
            </li>
            <li>
                <p>LG 27″ 4K UHD IPS LED (27UD68P)</p>
            </li>
            <li>
                <p>Apple Magic Mouse 2</p>
            </li>
            <li>
                <p>Apple Magic Keyboard 2</p>
            </li>
            <li>
                <p>Apple Air Pods</p>
            </li>
            <li>
                <p>Gerton desk table top from Ikea</p>
            </li>
            <li>
                <p>Herman Miller Aeron chair (size b)</p>
            </li>
        </ul>

        <h2>Miscellaneous</h2>
        <ul>
            <li>
                <p>iPhone 8 Plus</p>
            </li>
            <li>
                <p>The North Face Vault Backpack</p>
            </li>
        </ul>
    </Layout>
)

export default UsesPage