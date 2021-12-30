import { AppTitle } from "../components/App/Title";
import Navbar from "../components/Navbar";
import Contact from "./contact";
import Ending from "./ending";
import Me from "./Me";
import Skills from "./skills";

export default function Main() {
    return (
        <>
            <Navbar></Navbar>
            <Me />
            {/* <Projects /> */}
            
            <AppTitle id="skills">Skills & Utilizations</AppTitle>
            <Skills />
            <Ending />
            <Contact />
            
        </>
    )
}