import styled from "styled-components"
import { BsArrowRight } from "react-icons/bs"
import { pink } from "../../styles/colors"
const Container = styled.div`
    padding: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
`
const TextContainer = styled.div`
    max-width: 330px;
`
const PinkHighlight = styled.span`
    padding: 0 5px;
    background-color: ${pink};
    color: #fff;
`

const LabelText = styled.a`
    display: block;
    margin-top: 30px;
    color: #000;
    text-decoration: none;
    &:hover {
        text-decoration: underline; 
        color: ${pink};
    }
`

export default function Ending() {
    return (
        <Container className="container">
            <TextContainer>
                <h4>Interested in my projects, or want to <PinkHighlight>work</PinkHighlight> together?</h4>
                <LabelText href="/contact">Leave your message <BsArrowRight /></LabelText>
            </TextContainer>
        </Container>
    )
}