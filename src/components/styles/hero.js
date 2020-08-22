import styled from "styled-components"

const Hero = styled.section`
    text-align: center;
    p:first-of-type{
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 20px;
    }
    h1{
        margin: 0px 0px 5px 0px;
        font-size: 24px
    }
    @media (max-width: 480px) {
        p:first-of-type{
            font-size: 30px;
        }
        h1{
            font-size: 20px;
        }
    }
`

export default Hero