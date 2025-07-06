import React from 'react';
import { Link } from 'react-router-dom';

export default function Contacts() {
    return (
        <div>
            <h1>Страница About</h1>
            <Link to="/">Вернуться на Главную</Link>
        </div>
    );
}