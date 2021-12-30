import styled from "styled-components"
import { pink } from "../styles/colors"

const GlobalContainer = styled.div`
    display: flex;
    justify-content: center;
    position: sticky;
    backdrop-filter: blur(5px);
    background-color: rgba(255,255,255,0.6);
    top: 0;
    z-index: 50;
`

const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
`
const MenuContainer = styled.div`
    display: flex;
    align-items: center;
`
const Menu = styled.a`
    color: #00000070;
    margin: 0 15px;
    text-decoration: none;
    &:hover {
        color: #000;
    }
`
const Brand = styled.p`
    font-size: 1.22rem;
    color: #000;
`

const LName = styled.b`
    color: ${pink};
`

export default function Navbar() {
    return (
        <GlobalContainer>
            <NavbarContainer className="container-xxl">
                <div>
                    <Brand>NUTCHANON <LName>C.</LName></Brand>
                </div>
                <div className="disable-when-mobile">
                    <MenuContainer>
                        <Menu href="#me">Me</Menu>
                        <Menu href="#projects">Projects</Menu>
                        <Menu href="#skills">Skills</Menu>
                        <Menu href="#contact">Contact</Menu>
                    </MenuContainer>
                </div>
            </NavbarContainer>
        </GlobalContainer>
    )
}