import styled from "styled-components";
import { FullScreenBanner } from "../../../components/FullScreen";
import Navbar from "../../../components/Navbar";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillPhone, AiOutlineInstagram, AiFillMessage, AiFillMail } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { BsChatRightTextFill } from "react-icons/bs"
import { Link } from "react-router-dom";
import { pink } from "../../../styles/colors";


const QuickLinks = {
    gmail: "https://mail.google.com/mail/u/0/#inbox?compose=VpCqJRxblKSQJrSfvSvLpRhxdKTqgFcPwknmGqFSPLpzXQhqSpckhnqdRHMpBpZKJhJbSLg",
    facebook: "https://www.facebook.com/beammnc/",
    instagram: "https://www.instagram.com/beamuuuu/",
    linkedin: "https://www.linkedin.com/in/nutchanonc/",
    tel: "tel:0924373999"
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
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    border-radius: 30px;
    box-shadow: 0 20px 10px rgba(0,0,0,0.07);
    transition: 300ms ease;

    &:hover {
        transform: scale(1.1);
        background-color: ${pink};
    }
`

const QuickActionBox = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
`
const InformationContainer = styled.div`
    margin: 100px 0;
    background-color: #000;
    background-image: url(https://images.pexels.com/photos/2923591/pexels-photo-2923591.jpeg?auhref=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 400px;
    padding: 50px;
    color: #fff;
`
const Sub = styled.p`
    font-size: 1.5rem;
`
const TitleBoxIcon = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
`
export default function Contact() {
    return (
        <>
            <Navbar />
            <Screen>
                <Container className="container">
                    <div className="row m-0">
                        <div className="col-lg-9 d-flex justify-content-center align-items-center my-3">
                            <div>
                                <h1>Leave your messages <AiFillMessage color={pink} /></h1>
                                <Sub className="mt-3">Thank you for your interest. I'll get back to you as soon as possible.</Sub>
                            </div>
                        </div>
                        <div className="col-lg-3 my-3">
                            <TitleBoxIcon>
                                <BsChatRightTextFill color="#fff" size={150}/>
                            </TitleBoxIcon>
                        </div>
                    </div>

                    <QuickActionBox>
                        <h5 className="text-center">Choose which one you preferred </h5>
                        <div className="my-5 d-flex flex-wrap justify-content-center">
                            <a href={QuickLinks.gmail}>
                                <Box>
                                    <SiGmail color="#fff" size={40} />
                                </Box>
                            </a>
                            <a href={QuickLinks.facebook}>
                                <Box>
                                    <AiFillFacebook color="#fff" size={40} />
                                </Box>
                            </a>
                            <a href={QuickLinks.instagram}>
                                <Box>
                                    <AiOutlineInstagram color="#fff" size={40} />
                                </Box>
                            </a>
                            <a href={QuickLinks.linkedin}>
                                <Box>
                                    <AiFillLinkedin color="#fff" size={40} />
                                </Box>
                            </a>
                            <a href={QuickLinks.tel}>
                                <Box>
                                    <AiFillPhone color="#fff" size={40} />
                                </Box>
                            </a>
                        </div>
                    </QuickActionBox>
                    <InformationContainer>
                        <h3 className="mb-5">More contact information</h3>
                        <p><AiFillMail color="#fff" size={30} className="me-3 my-3" /> work.nutchanon@gmail.com</p>
                        <p><AiFillFacebook color="#fff" size={30} className="me-3 my-3" /> Beam Nutchanon</p>
                        <p><AiOutlineInstagram color="#fff" size={30} className="me-3 my-3" /> @beamuuuu</p>
                        <p><AiFillLinkedin color="#fff" size={30} className="me-3 my-3" /> Nutchanon Chantrasup</p>
                        <p><AiFillPhone color="#fff" size={30} className="me-3 my-3" /> +66 924373999</p>
                    </InformationContainer>
                </Container>
            </Screen>
        </>
    )
}