import styled from "styled-components"
import { pink } from "../styles/colors"

const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    margin: 0;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    backdrop-filter: blur(3px);
    background-color: #191a1c60;
    position: sticky;
    top: 0;
`
const MenuContainer = styled.div`
    display: flex;
    align-items: center;
`
const Menu = styled.a`
    color: #ffffff90;
    margin: 0 15px;
    text-decoration: none;
    &:hover {
        color: #fff;
    }
`
const Brand = styled.p`
    font-size: 1.22rem;
    color: #fff;
`

const LName = styled.b`
    color: ${pink};
`

export default function Navbar() {
    return (
        <NavbarContainer>
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
    )
}