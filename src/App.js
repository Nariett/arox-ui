import "./App.css";
import Contacts from "./pages/contacts/contacts";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalog from "./pages/catalog/catalog";
import About from "./pages/about/about";
import Lookbook from "./pages/lookbook/lookbook";
import Sale from "./pages/sale/sale";
import Product from "./pages/product/product";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/sale" element={<Sale/>} />
                <Route path="/lookbook" element={<Lookbook/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/product/:name" element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
