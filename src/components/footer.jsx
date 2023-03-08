import React from "react";
import "../styles/footer.css"
import { RiTwitterFill, RiFacebookFill, RiInstagramLine } from "react-icons/ri";

function Footer () {
    return (
        <>
        <section className="footer">
            <div className="brand">
            </div>
            <div className="productsfoo">
               <ul>
                <li>Pufi Rain</li>
                <br />
                <li>Pufi Puff</li>
                <br />
                <li>Pufi Cart</li>
                <br />
                <li>Pufi Nap</li>
               </ul>
            </div>
            <div className="contactfoo">
            <ul>
                <li>Contacto</li>
                <br />
                <li>Ayuda</li>
                <br />
                <li>Cómo comprar</li>
                <br />
                <li>Términos & Condiciones</li>
               </ul>
            </div>
            <div className="buyfoo">
                <p className="secbuy">Compra 100% segura</p>
                <div className="secbuyimg"></div>
                <div className="shieldimg"></div>
                <p className="warranty">Comprá con la garantía de Pufi</p>
            </div>
            <div className="snfoo">
                <p>Seguinos en</p>
                <div className="redes">
                <RiFacebookFill />
                <RiTwitterFill />
                <RiInstagramLine />
                </div>
            </div>
            
            <div className="copyright">
                <p className="rights">Pufi<span> Copyright 2017 - Todos los derechos reservados</span></p>
                <div className="imgbrandl"></div>
            </div>
            </section>
        </>
    )
}

export default Footer
