import styled from "styled-components"
import { BsArrowUpRight } from "react-icons/bs"

const CardContainer = styled.div`
    position: relative;
    margin: 80px 10px;
    min-height: 230px;
    background-color: #fff;
    cursor: pointer;
    transition: 300ms ease;
    box-shadow: 0 20px 10px rgba(0,0,0,0.06);
`
const Col1 = styled.div`
    height: 100%;
    display: flex;
    min-height: 230px;
    justify-content: center;
    align-items: center;
`
const Col2 = styled.div`
    padding: 2rem;
    min-height: 230px;
    align-item: center;
    position: relative;
`

const Title = styled.h4`
`

const Detail = styled.p`
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 400;
`
const BottomRight = styled.div`
    position: absolute;
    bottom: 20px;
    right: 6%;
`

const VisitorText = styled.p`
    color: #00000060;
`

interface ICard {
    img?: string
    title?: string
    details?: string
    link?: string
    color?: string
    size?: number
    visitorText?: string
}





export default function Card({ img, title, details, link, color, size, visitorText }: ICard) {
    return (
            <CardContainer className="row mx-0">
                <Col1
                    className="col-lg-5"
                    style={{
                        backgroundColor: color ? color : "#fff"
                    }}
                >
                    <img src={img} height={size ? size : 80} />
                </Col1>
                <Col2 className="col-lg-7">
                    <Title>{title}</Title>
                    <Detail>{details}</Detail>
                    <BottomRight>
                        <VisitorText>{ visitorText} <BsArrowUpRight className="ms-1"/></VisitorText>
                    </BottomRight>
                </Col2>
            </CardContainer>
    )
}