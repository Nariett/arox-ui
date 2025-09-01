import React, { useEffect, useState } from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useParams } from "react-router-dom";


export default function Product() {
    const { name } = useParams();

    return (
        <div>
            <Header />
            <h2>Product page for: {decodeURIComponent(name)}</h2>
            <Footer />
        </div>
    );
}