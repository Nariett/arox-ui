import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export default function Sale() {
    return (
        <div>
            <Header />
            <h1>Страница Sale</h1>
            <Link to="/catalog">Вернуться на Главную</Link>
            <Footer />
        </div>
    );
}