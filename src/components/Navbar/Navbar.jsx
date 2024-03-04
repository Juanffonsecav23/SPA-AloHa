import { Icon } from '@iconify/react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';



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
                    <ul id="navbarFV" className="navbar-nav mx-auto mb-lg-0 nav-justified">
                        <li className='cajasMenu'>
                            <div>
                                <NavLink to="/quienesSomos" className="navbarItem">Quiénes Somos</NavLink>
                            </div>
                            <div className="dropdown itemList tres">
                                <button className="dropbtn"><NavLink to="/habitaciones" className="itemListLink">Habitaciones ▼</NavLink></button>
                                <div className="dropdown-content">
                                <NavLink to="/category/bañoprivado" className="navbarItem" >Baño Privado</NavLink>
                                <NavLink to="/category/bañocompartido" className="navbarItem" >Baño Compartido</NavLink>
                                <NavLink to="/category/apartaestudio" className="navbarItem" >Aparta Estudios</NavLink>
                                </div>
                            </div>
                        </li>
                        <li id='cajaMedia'>
                        <NavLink to="/"><img src="/imgRooms/LogoAloHaEnBlanco.svg" alt="Logo" className='logo' /></NavLink>
                        </li>
                        <li className='cajasMenu'>
                            <div>
                                <NavLink to="/reglasyrecomendaciones" className="navbarItem">Reglas</NavLink>
                            </div>
                            <div >
                                <NavLink to="/contacto" className="navbarItem">Contacto</NavLink>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav> 
            )
}