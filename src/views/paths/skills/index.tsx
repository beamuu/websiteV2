import styled from "styled-components"
import { FullScreenBanner } from "../../../components/FullScreen"
import Navbar from "../../../components/Navbar"
import Contact from "../../contact"
import Card from "../../skills/Card"
import solidityIcon from "../../../images/file_type_solidity_icon_130156.png"
import { Helmet } from "react-helmet"

const Container = styled.div`
    margin-top: 150px;
    margin-bottom: 100px;
`
const Quote = styled.p`
    margin: 30px 0;
    font-size: 1.6rem;
`
const Screen = styled(FullScreenBanner)`
    height: auto !important;
`
const Global = styled.div`
    background-color: #ededed;
`
const Upshift = styled.div`
    transform: translateY(-60px);
`

export default function SkillsPath() {
    return (
        <>
            <Navbar></Navbar>
            <Helmet>
                <title>My Relevant Skills.</title>
            </Helmet>
            <Screen>
                <Container className="container">
                    <div className="row">
                        <div className="col-lg-7 my-3">
                            <h1>My Topic of The Year</h1>
                            <h5 className="my-3">in 2021</h5>
                            <Quote>Blockchain will change the way people use their money. Welcome to the next genereation of financial system.</Quote>
                            <p className="text-end"> - Nutchanon C.</p>
                        </div>
                        <div className="col-lg-5 px-4 my-3">
                            <Badge />
                        </div>
                    </div>



                </Container>
                <div className="container">
                    <h3>Tools & Frameworks</h3>
                </div>
                <Global>
                    <Tools />
                </Global>

                <div className="container">
                    <h3>Programming Languages</h3>
                </div>
                <Global>
                    <Lang />
                </Global>


            </Screen>
            <Contact />

        </>
    )
}

const BadgeContainer = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    background-color: #000;
    padding: 50px;
`
const BadgeTitle = styled.h3`
    color: #fff;
    margin-bottom: 40px;
`
const BadgeText = styled.p`
    color: #fff;
`
const BadgeRef = styled.a`
    text-align: end;
    display: block;
    margin-top: 30px;
    color: #fff;
`

function Badge() {
    return (
        <BadgeContainer>
            <BadgeTitle>Blockchain Will Impact The World Beyond Cryptocurrency</BadgeTitle>
            <BadgeText>No central person or company owns it. Rather, information is stored across a system of many personal computers so that there is no middleman. It’s decentralized and distributed so that no one person can take it down or corrupt it. However, anyone can use the system and help run it, as information is protected through cryptography.</BadgeText>
            <BadgeRef href="https://www.forbes.com/sites/theyec/2018/03/09/eight-ways-blockchain-will-impact-the-world-beyond-cryptocurrency/?sh=c23ca8e18832">- Forbes</BadgeRef>
        </BadgeContainer>
    )
}

const SkillContainer = styled.div`
    margin: 80px auto;
`

function Tools() {
    return (
        <SkillContainer className="container">
            <Upshift>
                <div className="row m-0">
                    <div className="col-lg">
                        <Card
                            title="Ethereum"
                            img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png"
                            details="Blockchain"
                            color="#f4f2f7"
                            visitorText="Visit Ethereum"
                        />
                    </div>
                    <div className="col-lg">
                        <Card
                            title="Truffle"
                            img="https://trufflesuite.com/assets/logo.png"
                            details="Tools for smart contracts"
                            color="#5fedc0"
                            visitorText="Learn more"
                        />
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-lg">
                        <Card
                            title="React"
                            img="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                            details=" A JavaScript library for building user interfaces"
                            color="#e6f1f2"
                            visitorText="Learn more"
                        />
                    </div>
                    <div className="col-lg">
                        <Card
                            title="Next.js"
                            img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png"
                            details="The React Framework for Production"
                            color="#fafafa"
                            visitorText="Learn more"
                        />
                    </div>
                </div>
            </Upshift>
        </SkillContainer>
    )
}

function Lang() {
    return (
        <SkillContainer className="container">
            <Upshift>
                <div className="row m-0">
                    <div className="col-lg">
                    <Card
                        title="Solidity"
                        img={solidityIcon}
                        details="Solidity is an object-oriented, high-level language for implementing smart contracts."
                        color="#000"
                        visitorText="Learn more"
                    />
                    </div>
                    <div className="col-lg">
                        <Card
                            title="JavaScript"
                            img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                            details="A lightweight, interpreted, or just-in-time compiled programming language."
                            color="#f7e018"
                            visitorText="Learn more"
                            size={150}
                        />
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-lg">
                        <Card
                            title="TypeScript"
                            img="https://iconape.com/wp-content/png_logo_vector/typescript.png"
                            details="Javascript with types."
                            color="#007acc"
                            visitorText="Learn more"
                            size={150}
                        />
                    </div>
                    <div className="col-lg">
                        <Card
                            title="Golang"
                            img="https://seeklogo.com/images/G/go-logo-046185B647-seeklogo.com.png"
                            details="Statically Typed Language."
                            color="#03adfc"
                            visitorText="Learn more"
                            size={100}
                        />
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-lg">
                        <Card
                            title="C++"
                            img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
                            details="Statically Typed Language."
                            color="#dde6eb"
                            visitorText="Learn more"
                            size={150}
                        />
                    </div>
                    <div className="col-lg">
                        <Card
                            title="Python"
                            img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                            details="It's Python XD."
                            color="#000000"
                            visitorText="Learn more"
                            size={100}
                        />
                    </div>
                </div>
            </Upshift>
        </SkillContainer>
    )
}