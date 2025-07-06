import React from "react";
import "./main.css";
import Product from "../product/product";

import image1 from "../../image/t-shirt-criminal.jpg";
import image2 from "../../image/balaclava-sniper.jpg"
import image3 from "../../image/t-shirt-gerb.jpg";
import image4 from "../../image/balaclava-jonhy.jpg"
import image5 from "../../image/navy-sneaker.jpg";
import image6 from "../../image/runner-sneaker.jpg"
import image7 from "../../image/track-sneaker.jpg";
import image8 from "../../image/hike-sneaker.jpg"


function Main() {
    return (
        <main className="Main">
            <div className="Grid">
                <Product image={image1} name={"T-SHIRT «CRIMINAL BUSINESS»"} price={"85"} />
                <Product image={image2} name={"BALACLAVA «JONY»"} price={"100"} />
                <Product image={image3} name={"T-SHIRT «GERB»"} price={"85"} />
                <Product image={image4} name={"BALACLAVA «SNIPER»"} price={"90"} />
                <Product image={image5} name={"SNEAKER «NAVY»"} price={"85"} />
                <Product image={image6} name={"SNEAKER «RUNNER»"} price={"100"} />
                <Product image={image7} name={"SNEAKER «TRACK»"} price={"85"} />
                <Product image={image8} name={"SNEAKER «HIKE RUNNER»"} price={"90"} />
            </div>
        </main>
    );
}

export default Main;