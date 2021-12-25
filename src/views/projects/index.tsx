import styled from "styled-components"
import { FullScreenBanner } from "../../components/FullScreen"
import Card from "./Card"

const Container = styled.div`
    margin-top: 150px;
    padding: 40px auto;
`

const Header = styled.p`
    font-size: 1.2rem;
    color: #fff;
`
const CardBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default function Projects() {
    return (
        <Container className="container" id="contact">
            <Header>PAST PROJECTS</Header>
            <CardBox>
                <Card 
                    title="Katrade"
                    img="https://github.com/katrade/resources/blob/main/katradefav.png?raw=true"
                    details="Items trading platform"
                    />
            </CardBox>
        </Container>
    )
}