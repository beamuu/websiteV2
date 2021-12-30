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

export default function Skills() {
    return (
        <Container className="container" id="skills">
            <Header>SKILLS</Header>
            <div className="row m-0">
                <div className="col-lg">
                    <Card
                        title="Solidity"
                        img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Solidity_logo.svg/512px-Solidity_logo.svg.png"
                        details="Smart Contract Programming Language"
                    />
                </div>
                <div className="col-lg">
                    <Card
                        title="Ethereum"
                        img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/628px-Ethereum_logo_2014.svg.png"
                        details="Ethereum development"
                    />
                </div>
            </div>
            <div className="row m-0">
                <div className="col-lg">
                    <Card
                        title="Truffle"
                        img="https://trufflesuite.com/assets/logo.png"
                        details="Smart Contract SDK"
                    />
                </div>
                <div className="col-lg">
                    <Card
                        title="Nodejs"
                        img="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png"
                        details="Programming Language"
                    />
                </div>
            </div>
        </Container>
    )
}