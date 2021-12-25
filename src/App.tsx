import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './views/contact';
import Me from './views/Me';
import Projects from './views/projects';




function App() {
    return (
        <>
            <Navbar></Navbar>
            <Me />
            <Projects />
            <Contact />
            
        </>
    );
}

export default App;
