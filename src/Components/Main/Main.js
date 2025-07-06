import React from "react";
import "./Main.css";
import Product from "../Product/Product";

import image1 from "../../Image/t-shirt-criminal.jpg";
import image2 from "../../Image/balaclava-sniper.jpg"
import image3 from "../../Image/t-shirt-gerb.jpg";
import image4 from "../../Image/balaclava-jonhy.jpg"

function Main() {
    return (
        <main className="Main">
            <div className="Grid">
                <Product image={image1} name={"T-SHIRT «CRIMINAL BUSINESS»"} price={"$85"} />
                <Product image={image2} name={"BALACLAVA «JONY»"} price={"$100"} />
                <Product image={image3} name={"T-SHIRT «GERB»"} price={"$85"} />
                <Product image={image4} name={"BALACLAVA «SNIPER»"} price={"$90"} />
                <Product image={image1} name={"T-SHIRT «CRIMINAL BUSINESS»"} price={"$85"} />
                <Product image={image2} name={"BALACLAVA «JONY»"} price={"$100"} />
                <Product image={image3} name={"T-SHIRT «GERB»"} price={"$85"} />
                <Product image={image4} name={"BALACLAVA «SNIPER»"} price={"$90"} />
                <Product image={image4} name={"BALACLAVA «SNIPER»"} price={"$90"} />

            </div>
        </main>
    );
}

export default Main;