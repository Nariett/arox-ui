import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "./item.css";
import 'swiper/css';
import 'swiper/css/navigation';

function Item({index, images, name, price, link }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/id=${index}`);
    };

    return (
        <a className="item" href={link} onClick={handleClick}>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="productSwiper"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img className="Img" src={img} alt = "err"/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="description">{name}</div>
            <div className="price">{"$" + price}</div>
        </a>
    );
}

export default Item;