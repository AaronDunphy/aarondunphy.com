import styled from "styled-components"

const About = styled.section`
    .profileImage {
        max-width: 200px;
        width: 100%;
        float: left;
        margin: 0px 20px 20px 0px;
    }
    img {
        margin-bottom: 0px;
    }
    @media(max-width: 700px) {
        .profileImage {
            float: none;
        }
    }
`

export default About