import styled from "styled-components"
import { BsArrowUpRight } from "react-icons/bs"
const CardContainer = styled.div`
    position: relative;
    margin: 20px 10px;
    height: 150px;
    background-color: rgba(70,70,70, 0.1);
    cursor: pointer;
    transition: 300ms ease;

    border: 1px solid #363636;

    &:hover {
        background-color: rgba(70,70,70, 0.3);
    }
`
const Col1 = styled.div`
    height: 100%;
`
const Title = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
`

const Detail = styled.p`
    margin-top: 10px;
    font-size: 1.1rem;
    font-weight: 300;
    color: rgba(255,255,255,0.5);
`
const TopRight = styled.div`
    position: absolute;
    top: 20px;
    left: 94%;
`

interface ICard {
    img?: string
    title?: string
    details?: string
    link?: string
    color?: string
}





export default function Card({ img, title, details, link, color }: ICard) {
    return (
        <div>

            {/* <CardContainer>
                <TopRight>
                    <BsArrowUpRight />
                </TopRight>
                <img src={img} height={60} className="me-5" />
                <div>
                    
                    <Title>{title}</Title>
                    <Detail>{details}</Detail>
                </div>

            </CardContainer> */}

            <CardContainer className="row m-0">
                <Col1 
                    className="col-lg-4" 
                    style={{
                        backgroundColor: color ? color: "#fff"
                    }}
                    >
                        ?
                </Col1>
                <div className="col-lg-8">
                        ?? 
                </div>
            </CardContainer>
        </div>
    )
}