import styled from "styled-components";
import { FullScreenBanner } from "../../../components/FullScreen";
import Navbar from "../../../components/Navbar";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillPhone, AiOutlineInstagram, AiFillMessage, AiFillMail } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import { blue } from "../../../styles/colors";


const QuickLinks = {
    gmail: "https://mail.google.com/mail/u/0/#inbox?compose=VpCqJRxblKSQJrSfvSvLpRhxdKTqgFcPwknmGqFSPLpzXQhqSpckhnqdRHMpBpZKJhJbSLg"
}



const Container = styled.div`
    margin-top: 150px;
    margin-bottom: 100px;
`
const Screen = styled(FullScreenBanner)`
    height: auto !important;
`

const Box = styled.div`
    margin: 20px;
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
`

const QuickActionBox = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
`
const InformationContainer = styled.div`
    margin: 100px 0;
    background-color: #000;
    background-image: url(https://images.pexels.com/photos/2923591/pexels-photo-2923591.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 400px;
    padding: 50px;
    color: #fff;
`
export default function Contact() {
    return (
        <>
            <Navbar />
            <Screen>
                <Container className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="text-center">Leave your messages <AiFillMessage color={blue}/></h1>
                            <p className="mt-3">Thank you for your interest.</p>
                        </div>
                    </div>
                    <QuickActionBox>
                        <h5 className="text-center">Choose which one you preferred </h5>
                        <div className="my-5 d-flex flex-wrap justify-content-center">
                            <Link to={QuickLinks.gmail}>
                                <Box>
                                    <SiGmail color="#fff" size={40} />
                                </Box>
                            </Link>
                            <Link to={QuickLinks.gmail}>
                                <Box>
                                    <AiFillFacebook color="#fff" size={40} />
                                </Box>
                            </Link>
                            <Link to={QuickLinks.gmail}>
                                <Box>
                                    <AiOutlineInstagram color="#fff" size={40} />
                                </Box>
                            </Link>
                            <Link to={QuickLinks.gmail}>
                                <Box>
                                    <AiFillLinkedin color="#fff" size={40} />
                                </Box>
                            </Link>
                            <Link to={QuickLinks.gmail}>
                                <Box>
                                    <AiFillPhone color="#fff" size={40} />
                                </Box>
                            </Link>
                        </div>
                    </QuickActionBox>
                    <InformationContainer>
                        <h3 className="mb-5">More contact information</h3>
                        <p><AiFillMail color="#fff" size={30} className="me-3 my-3"/> work.nutchanon@gmail.com</p>
                        <p><AiFillFacebook color="#fff" size={30} className="me-3 my-3"/> Beam Nutchanon</p>
                        <p><AiOutlineInstagram color="#fff" size={30} className="me-3 my-3"/> @beamuuuu</p>
                        <p><AiFillLinkedin color="#fff" size={30} className="me-3 my-3"/> Nutchanon Chantrasup</p>
                        <p><AiFillPhone color="#fff" size={30} className="me-3 my-3"/> +66 924373999</p>
                    </InformationContainer>
                </Container>
            </Screen>
        </>
    )
}