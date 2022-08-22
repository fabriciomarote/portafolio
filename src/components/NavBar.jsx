import React, { useState } from 'react';
import logo1 from '../media/logo-dark.png';
import logo2 from '../media/logo-light.png';
import Themes from '../theme/Themes'
import { ThemeProvider } from 'styled-components';
import { NavBarContainer } from '../theme/Changes';

import '../styles/NavBar.css';

const NavBar = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    const changeTheme = () => {
        let colour;
        if (theme === 'light') {
            setTheme('dark');
            colour = 'dark';
        } else {
            setTheme('light');
            colour = 'light';
        }
        localStorage.setItem('theme', colour);
    }

    const logo = (theme === 'light') ? logo2 : logo1;

    return (
        <>  
            <ThemeProvider theme={Themes[theme]}>
                <NavBarContainer> 
                    <div className="navbar-container">
                        <div className="nav">
                            <input type="checkbox" id="nav-check"/>
                            <div className="nav-header">
                                <div className="box-title">  
                                    <a href="/" className='logo'><img src={logo} alt="logo"/></a>
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
                                <a href="/about" className="btn-btn" >Sobre mi</a>
                                <a href="/skills" className="btn-btn" >Skills</a>
                                <a href="/projects" className="btn-btn">Proyectos</a>
                                <a href="/contact" className="btn-btn"> Contacto</a>                        
                                <a className="btn-btn" onClick={() => changeTheme()}>{theme}</a> 
                            </div>
                        </div>
                    </div>
                </NavBarContainer>
            </ThemeProvider> 
        </>
    );
  }
  
  export default NavBar;