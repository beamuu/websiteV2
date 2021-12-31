import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { pink } from "../styles/colors"
import { RiHomeFill } from "react-icons/ri"
import { Link } from "react-router-dom"
import logo from "../../src/images/websitev2-logo.svg"
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

    const { pathname } = useLocation();
    const navigate = useNavigate();


    return (
        <GlobalContainer>
            <NavbarContainer className="container-xxl">
                <Link to="/" className="no-decoration">
                    <div className="d-flex align-items-center">
                        <img src={logo} height={30} className="me-3"/><Brand>NUTCHANON <LName>C</LName></Brand>
                    </div>
                </Link>
                <div className="disable-when-mobile">
                    {
                        pathname === '/' ?

                            <MenuContainer>
                                <Menu href="#me">Me</Menu>
                                <Menu href="#skills">Skills</Menu>
                                <Menu href="#contact">Contact</Menu>
                            </MenuContainer>

                            :
                            <Link to="/" className="no-decoration text-black">
                                <RiHomeFill size={25} />
                            </Link>
                    }
                </div>
            </NavbarContainer>
        </GlobalContainer>
    )
}