import React from "react";
import "./product.css";

function Product({ image, name, price, link }) {
    return (
        <a className="item" href={link}>
            <img className="Img" src={image} alt={name}/>
            <div className="description">{name}</div>
            <div className="price">{"$" + price}</div>
        </a>
    );
}

export default Product;