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
        <main className="Main">
            <div className="Grid">
                <Item images={[image1, image2, image3]} name={"T-SHIRT «CRIMINAL BUSINESS»"} price={"85"} />
                <Item images={[image2]} name={"BALACLAVA «JONY»"} price={"100"} />
                <Item images={[image3]} name={"T-SHIRT «GERB»"} price={"85"} />
                <Item images={[image4]} name={"BALACLAVA «SNIPER»"} price={"90"} />
                <Item images={[image5]} name={"SNEAKER «NAVY»"} price={"85"} />
                <Item images={[image6]} name={"SNEAKER «RUNNER»"} price={"100"} />
                <Item images={[image7]} name={"SNEAKER «TRACK»"} price={"85"} />
                <Item images={[image8]} name={"SNEAKER «HIKE RUNNER»"} price={"90"} />
            </div>
        </main>
    );
}

export default Main;