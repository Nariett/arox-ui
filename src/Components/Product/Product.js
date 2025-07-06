import React from "react";
import "./Product.css";

function Product({ image, name, price }) {
    return (
        <div className="item">
            <img className="Img" src={image} alt="Product Image" />
            <div className="description">{name}</div>
            <div className="price">{price}</div>
        </div>
    );
}

export default Product;