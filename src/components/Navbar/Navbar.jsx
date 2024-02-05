import { Icon } from '@iconify/react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import QuienesSomos from "../QuienesSomos/QuienesSomos"



export default function Navbar () {

    return (
        <nav className="header navbar-expand-xl">
            <div className='continer-fluid'>
                <div className="container-fluid-adpt navbarR" style={{height:"40px"}}>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><Icon icon="mingcute:menu-fill" color='white' style={{marginTop:"10px"}}/></span>
                    </button>
                </div>
                <div className='collapse navbar-collapse' id="navbarTogglerDemo01"> 
                    <ul className="navbarFV navbar-nav mx-auto mb-2 mb-lg-0 nav-justified">
                        <li>
                        <NavLink to="/"><img src="/imgRooms/LogoAloHaEnBlanco.svg" alt="Logo" className='logo' /></NavLink>
                        </li>
                        <li>
                            <NavLink to="/QuienesSomos" className="navbarItem">Quiénes Somos</NavLink>
                        </li>
                        <li className="dropdown itemList tres">
                            <button className="dropbtn"><NavLink to="/habitaciones" className="itemListLink">Habitaciones ▼</NavLink></button>
                            <div className="dropdown-content">
                            <NavLink to="/category/Baño Privado" className="navbarItem" >Baño Privado</NavLink>
                            <NavLink to="/category/Baño Compartido" className="navbarItem" >Baño Compartido</NavLink>
                            <NavLink to="/category/Aparta Estudio" className="navbarItem" >Aparta Estudios</NavLink>
                            </div>
                            </li>
                        <li>
                            <NavLink to="/ReglasyRecomendaciones" className="navbarItem">Reglas</NavLink>
                        </li>
                        <li >
                            <NavLink to="/Contacto" className="navbarItem">Contacto</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
            )
}