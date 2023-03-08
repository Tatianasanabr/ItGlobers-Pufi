import React from "react";
import Home from "./home";
import styled from "styled-components"
import "../styles/navbar.css"
import logo from "../img/pufibrand.png"
import { IconContext } from "react-icons";
import { GiSofa } from "react-icons/gi";
import { RiUmbrellaLine, RiShoppingBagLine, RiSuitcase2Fill } from "react-icons/ri";


function Navbar() {
    return (
        <>
        <header>
            <NavContainer className="navContainer">
                <img src={logo}></img>
                <div className="categorias">
                    <IconContext.Provider value={{ color: "white" }}>
                        <div>
                            <GiSofa />
                            
                        </div>
                    </IconContext.Provider>
                        <IconContext.Provider value={{ color: "white" }}>
                        <div>
                            <RiUmbrellaLine />
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ color: "white" }}>
                        <div>
                            <RiShoppingBagLine />
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ color: "white" }}>
                        <div>
                            <RiSuitcase2Fill />
                        </div>
                    </IconContext.Provider>
                        <a href="/" className="categoriaEnlace">Pufi Puff  </a>
                        <a href="/" className="categoriaEnlace">Pufi Rain  </a>
                        <a href="/" className="categoriaEnlace">Pufi Cart  </a>
                        <a href="/" className="categoriaEnlace">Pufi Nap </a>
                </div>
                <div className="useracces">
                    <select name="select" className="selectMicuenta">
                        <option value="Hi" selected>Mi cuenta</option>
                        <option value="Hi">Mi perfil</option>
                        <option value="Hi">Mis puntos</option>
                        <option value="Hi">Cerrar sesion</option>


                    </select>
{/*                     <a href="/" className="categoriaEnlace">Mi cuenta |</a>
 */}                    <a href="/" className="categoriaEnlace">Mi compra</a>
                </div>
            </NavContainer>
            <Home />
            </header>
        </>
    )
}

export default Navbar

const NavContainer = styled.nav`

`

