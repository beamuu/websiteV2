import styled from "styled-components"
import { FullScreenBanner } from "../../components/FullScreen"

const Container = styled.div`
    padding: 40px auto;
`

const Header = styled.p`
    font-size: 1.2rem;
    color: #fff;
`

export default function Contact() {
    return (
        <Container className="container" id="contact">
            <Header>CONTACT</Header>
        </Container>
    )
}