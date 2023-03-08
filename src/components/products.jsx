import React from "react";
import "../styles/products.css"
import Info from "./infoproduct";
import rain from "../img/rain.png";

function Products () {
    return (
        <>
            <section className="Products">
                <div className="imgproductRain">
                <div className="sectionHome">
                    <button className="botonShopimg">S h o p</button>
                </div>
                </div>
                <div className="productDetail">
                    <section className="imgrain"></section>
                    <h2 className="pufiDetail">Pufi <span className="productName">Rain</span></h2>
                    <Info />
                </div>
                <div >
                    <section className="imgpuff"></section>
                    <h2 className="pufiDetail">Pufi <span className="productName">Puff</span></h2>
                    <Info />
                </div>
                <div className="imgproductPuff">
                </div>
                <div className="imgproductCart">
                </div>
                <div >
                    <section className="imgbags"></section>
                    <h2 className="pufiDetail">Pufi <span className="productName">Cart</span></h2>
                    <Info />
                </div>
                <div >
                    <section className="imgnap"></section>
                    <h2 className="pufiDetail">Pufi <span className="productName">Nap</span></h2>
                    <Info />
                </div>
                <div className="imgproductNap">
                </div>
            </section>
        </>
    )
}

export default Products