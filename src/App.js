import "./App.css";
import Contacts from "./pages/contacts";
import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home/>} />
                <Route path="contacts" element={<Contacts/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
