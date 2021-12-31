import styled from "styled-components"
import { MdClose } from "react-icons/md"
import { useState } from "react"

const Container = styled.div`
    position: fixed;
    bottom: 10px;
    left: 40px;
    right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;    
`
const Close = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    color: #ffffff !important;
    border-radius: 50%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    transition: 300ms ease;
    &:hover {
        background-color: #ffffff10
    }
`
const Box = styled.div`
    position: relative;
    background-color: #000000;
    width: fit-content;
    height: 70px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;    
    padding: 0px 50px;
    border-radius: 8px;
`
export default function HPNY() {

    const [show, setShow] = useState(true)

    function toggleShow() {
        setShow(!show)
    }

    if (!show) {
        return null;
    }

    return (
        <Container>
            <Box>
                <Close onClick={toggleShow}>
                    <MdClose size={20} style={{fill: "#ffffff"}} color="white"/>
                </Close>
                <h6><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/party-popper_1f389.png" height={20} /> Happy New Year, 2022.</h6>
            </Box>
        </Container>
    )
}