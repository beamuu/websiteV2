import styled from "styled-components"
import { BsArrowRight } from "react-icons/bs"
const Container = styled.div`
    padding: 90px;
    display: flex;
    justify-content: center;
    aluign-items: center;
    height: 400px;
`
const TextContainer = styled.div`
    max-width: 330px;
`

export default function Ending() {
    return (
        <Container className="container">
            <TextContainer>
                <h4>Interested in my projects, or want to work together?</h4>
                <p className="mt-3">Leave your message <BsArrowRight /></p>
            </TextContainer>
        </Container>
    )
}