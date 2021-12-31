import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './views/main';
import Contact from './views/paths/contact';
import SkillsPath from './views/paths/skills';




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/skills" element={<SkillsPath />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            
        </BrowserRouter>
    );
}

export default App;
