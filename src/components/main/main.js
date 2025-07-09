import React from "react";
import "./main.css";

import image1 from "../../image/t-shirt-criminal.jpg";
import image2 from "../../image/balaclava-sniper.jpg"
import image3 from "../../image/t-shirt-gerb.jpg";
import image4 from "../../image/balaclava-jonhy.jpg"
import image5 from "../../image/navy-sneaker.jpg";
import image6 from "../../image/runner-sneaker.jpg"
import image7 from "../../image/track-sneaker.jpg";
import image8 from "../../image/hike-sneaker.jpg"
import Item from "../item/item";

function Main() {
    return (
        <div className="main">
            <div className="grid">
                <Item index={1} images={[image1, image2, image3]} name={"T-SHIRT «CRIMINAL BUSINESS»"} price={"85"} />
                <Item index={2} images={[image2]} name={"BALACLAVA «JONY»"} price={"100"} />
                <Item index={3} images={[image3]} name={"T-SHIRT «GERB»"} price={"85"} />
                <Item index={4} images={[image4]} name={"BALACLAVA «SNIPER»"} price={"90"} />
                <Item index={5} images={[image5]} name={"SNEAKER «NAVY»"} price={"85"} />
                <Item index={6} images={[image6]} name={"SNEAKER «RUNNER»"} price={"100"} />
                <Item index={7} images={[image7]} name={"SNEAKER «TRACK»"} price={"85"} />
                <Item index={8} images={[image8]} name={"SNEAKER «HIKE RUNNER»"} price={"90"} />
            </div>
        </div>
    );
}

export default Main;