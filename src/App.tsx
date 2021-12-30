import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './views/contact';
import Me from './views/Me';
import Projects from './views/projects';
import Skills from './views/skills';




function App() {
    return (
        <>
            <Navbar></Navbar>
            <Me />
            {/* <Projects /> */}
            <Skills />
            <Contact />
            
        </>
    );
}

export default App;
