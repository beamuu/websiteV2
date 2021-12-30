import styled from "styled-components"

const Container = styled.div`
    margin: 20px 0;
    display: flex;
    width: 320px;
    background-color: #ffffff10;
    height: 40px;
`
const ImageIcon: any = styled.div`
    min-width: 40px;
    min-height: 40px;
    width: 40px;
    height: 40px;
    background-image: url(${(props: any) => props.img ? props.img : "" });
    background-size: 110%;
    background-position: center;
    background-color: ${(props: any) => props.imageBackgroundColor ? props.imageBackgroundColor : "transparent"};
`

interface IContactCard {
    link?: string
    img?: string
    imageBackgroundColor?: string
}

export default function ContactCard({ img, link, imageBackgroundColor }: IContactCard) {

    return (
        <Container>
            <ImageIcon img={img} imageBackgroundColor={imageBackgroundColor}/>
        </Container>
    )
}