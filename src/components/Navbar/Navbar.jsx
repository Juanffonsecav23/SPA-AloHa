import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  // Estado para controlar la visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para manejar el cambio de estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para ocultar el menú cuando se selecciona una opción
  const hideMenu = () => {
    setIsMenuOpen(false);
  };

  // Efecto para guardar el estado del menú en el almacenamiento local
  useEffect(() => {
    const menuState = localStorage.getItem('menuState');
    if (menuState === 'open') {
      setIsMenuOpen(true);
    }
  }, []);

  // Función para guardar el estado del menú en el almacenamiento local al cerrar o abrir
  useEffect(() => {
    localStorage.setItem('menuState', isMenuOpen ? 'open' : 'closed');
  }, [isMenuOpen]);

  return (
    <nav className="header navbar-expand-xl">
      <div className="container-fluid">
        <div className="container-fluid-adpt navbarR" style={{ height: "40px" }}>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"><Icon icon="mingcute:menu-fill" color='white' style={{ marginTop: "10px" }} /></span>
          </button>
        </div>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarTogglerDemo01">
          <ul id="navbarFV" className="navbar-nav mx-auto mb-lg-0 nav-justified">
            <li className='cajasMenu'>
              <div>
                <NavLink to="/quienesSomos" className="navbarItem" onClick={hideMenu}>Quiénes Somos</NavLink>
              </div>
              <div className="dropdown itemList tres">
                <button className="dropbtn"><NavLink to="/habitaciones" className="itemListLink" onClick={hideMenu}>Habitaciones ▼</NavLink></button>
                <div className="dropdown-content">
                  <NavLink to="/category/Baño Privado" className="navbarItem" onClick={hideMenu}>Baño Privado</NavLink>
                  <NavLink to="/category/Baño Compartido" className="navbarItem" onClick={hideMenu}>Baño Compartido</NavLink>
                  <NavLink to="/category/Aparta Estudio" className="navbarItem" onClick={hideMenu}>Aparta Estudios</NavLink>
                </div>
              </div>
            </li>
            <li id='cajaMedia'>
              <NavLink to="/"><img src="/imgRooms/LogoAloHaEnBlanco.svg" alt="Logo" className='logo' onClick={hideMenu} /></NavLink>
            </li>
            <li className='cajasMenu'>
              <div>
                <NavLink to="/reglasyrecomendaciones" className="navbarItem" onClick={hideMenu}>Reglas</NavLink>
              </div>
              <div >
                <NavLink to="/contacto" className="navbarItem" onClick={hideMenu}>Contacto</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
