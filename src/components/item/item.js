import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "./item.css";
import 'swiper/css';
import 'swiper/css/navigation';

function Item({index, images, name, price}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${index}`);
    };

    return (
        <div className="item">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="productSwiper"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index} onClick={handleClick}>
                            <img className="img" src={img} alt = "err"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            <div className="description" onClick={handleClick}>{name}</div>
            <div className="price" onClick={handleClick}>{"$" + price}</div>
        </div>
    );
}

export default Item;