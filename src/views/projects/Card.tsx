import styled from "styled-components"

const CardContainer = styled.div`
    margin: 20px 10px;
    min-height: 160px;
    background-color: rgba(70,70,70, 0.3);
    border-radius: 20px;
    cursor: pointer;
    transition 300ms ease;

    padding: 30px;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background: rgb(12,14,88);
        background: linear-gradient(17deg, rgba(12,14,88,0.7987570028011204) 0%, rgba(14,69,85,1) 26%, rgba(154,16,72,0.958420868347339) 100%);
    }
`

const Title = styled.p`
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: 500;
`

const Detail = styled.p`
    margin-top: 10px;
    font-size: 1.1rem;
    font-weight: 300;
    color: rgba(255,255,255,0.7);
`

interface ICard {
    img?: string
    title?: string
    details?: string
    link?: string
}

export default function Card({ img, title, details, link }: ICard) {
    return (
        <CardContainer>
            <img src={img} height={60}></img>
        </CardContainer>
    )
}