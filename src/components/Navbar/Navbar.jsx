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
                    <ul className="navbarFV navbar-nav mx-auto mb-lg-0 nav-justified" style={{paddingLeft:"30px"}}>
                    <li className='cajasMenu'>
                            <div>
                                <NavLink to="/QuienesSomos" className="navbarItem">Quiénes Somos</NavLink>
                            </div>
                            <div className="dropdown itemList tres">
                                <button className="dropbtn"><NavLink to="/habitaciones" className="itemListLink">Habitaciones ▼</NavLink></button>
                                <div className="dropdown-content">
                                <NavLink to="/category/Baño Privado" className="navbarItem" >Baño Privado</NavLink>
                                <NavLink to="/category/Baño Compartido" className="navbarItem" >Baño Compartido</NavLink>
                                <NavLink to="/category/Aparta Estudio" className="navbarItem" >Aparta Estudios</NavLink>
                                </div>
                            </div>
                        </li>
                        <li id='cajaMedia'>
                        <NavLink to="/"><img src="/imgRooms/LogoAloHaEnBlanco.svg" alt="Logo" className='logo' /></NavLink>
                        </li>
                        <li className='cajasMenu'>
                            <div>
                                <NavLink to="/ReglasyRecomendaciones" className="navbarItem">Reglas</NavLink>
                            </div>
                            <div >
                                <NavLink to="/Contacto" className="navbarItem">Contacto</NavLink>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav> 
            )
}