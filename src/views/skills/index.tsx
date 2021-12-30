import styled from "styled-components"
import { BsArrowUpRight } from "react-icons/bs"
import Card from "./Card"
import { pink } from "../../styles/colors"
const Container = styled.div`
    padding: 40px auto;
    
`
const Global = styled.div`
    background-color: #ededed;
`
const Upshift = styled.div`
    transform: translateY(-50px);
`
const More = styled.a`
    text-align: center;
    color: #000;

    &:hover {
        color: ${pink};
    }
`

export default function Skills() {
    return (
        <Global>
            <Container className="container">
                <Upshift>
                    <Card
                        title="Solidity: Programming language"
                        img="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_solidity_icon_130156.png"
                        details="Solidity is an object-oriented, high-level language for implementing smart contracts."
                        color="#000"
                        visitorText="Learn more"
                    />
                    <Card
                        title="Ethereum development"
                        img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png"
                        details="Ethereum is a technology that's home to digital money, global payments, and applications. It's open to everyone, wherever you are in the world – all you need is the internet."
                        color="#f4f2f7"
                        visitorText="Visit Ethereum"
                    />
                    <Card
                        title="NodeJS: An asynchronous event-driven JavaScript runtime"
                        img="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png"
                        details="Smart Contract Programming Language"
                        color="#d5eb94"
                        visitorText="Learn more"
                    />
                    <Card
                        title="Truffle: Sweet tools for smart contracts"
                        img="https://trufflesuite.com/assets/logo.png"
                        details="A world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier."
                        color="#5fedc0"
                        visitorText="Learn more"
                    />
                    <Card
                        title="React: A JavaScript library for building user interfaces"
                        img="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                        details="Building user interfaces by using React with a component-base tools. Manage states and variables, handle component's lifecycle with React hooks."
                        color="#e6f1f2"
                        visitorText="Learn more"
                    />
                    <Card
                        title="Next.js: The React Framework for Production"
                        img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png"
                        details="Building user interfaces by using React with a component-base tools. Manage states and variables, handle component's lifecycle with React hooks."
                        color="#fafafa"
                        visitorText="Learn more"
                    />

                    <More href="/skills">More about skills & utilizations <BsArrowUpRight /></More>
                </Upshift>

            </Container>
        </Global>
    )
}