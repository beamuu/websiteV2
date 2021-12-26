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

export default function Projects() {
    return (
        <Container className="container" id="contact">
            <Header>PAST PROJECTS</Header>
            <div className="row m-0">
                <div className="col-lg-4">
                    <Card
                        title="Katrade"
                        img="https://github.com/katrade/resources/blob/main/katradefav.png?raw=true"
                        details="Items trading platform"
                    />
                </div>
                <div className="col-lg-8">
                    <Card 
                        img="https://github.com/katrade/resources/blob/main/mainlogo-white.png?raw=true"
                    />
                </div>
            </div>
            <div className="row m-0">
                <div className="col-lg">
                    
                </div>
                <div className="col-lg"></div>
                <div className="col-lg"></div>
            </div>
        </Container>
    )
}