import React from 'react';
import logo1 from '../assets/img/logo-dark.png';
import '../styles/NavBar.css';

const NavBar = () => {

    return (
        <>  
            <div className="navbar-container">
                <div className="nav">
                    <input type="checkbox" id="nav-check"/>
                    <div className="nav-header">
                        <div className="box-title">  
                            <a href="/" className='logo'><img src={logo1} alt="logo" /></a>
                        </div>
                    </div>
                    <div className="nav-btn">
                        <label for="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <div className="nav-links">
                        <a href="/" className="btn-btn" >Inicio</a>
                        <a href="/about" className="btn-btn" >Sobre mí</a>
                        <a href="/skills" className="btn-btn" >Habilidades</a>
                        <a href="/projects" className="btn-btn">Proyectos</a>
                        <a href="/contact" className="btn-btn"> Contacto</a>                        
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default NavBar;