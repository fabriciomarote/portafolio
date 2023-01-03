import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logo-dark.png';
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ThemeProvider } from 'styled-components';
import { NavBarContainer } from '../components/theme/Changes';
import Themes from '../components/theme/Theme';
import '../styles/NavBar.css';

const NavBar = (props) => {

    const { theme, setTheme } = props;

    console.log(theme)

    const changeMode = () => {
        let colorTema;
        if (theme === 'light') {
            setTheme('dark');
            colorTema = 'dark';
        } else {
            setTheme('light');
            colorTema = 'light';
        }
        localStorage.setItem('theme', colorTema);
    }
    
    return (
        <>  
            
                    <div className="navbar-container">
                        <div className="nav">
                            <input type="checkbox" id="nav-check"/>
                            <div className="nav-header">
                                <div className="box-title">  
                                    <a href="/" className='logo'><img src={logo} alt="logo" /></a>
                                </div>
                            </div>
                            <div className="nav-btn">
                                <label htmlFor="nav-check">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </label>
                            </div>
                            <div className="nav-links">
                                <div className='icon-theme' onClick={() => changeMode()}>
                                { theme === "dark" ? <BsFillSunFill  className='icon-dark' size={30}/> : <BsFillMoonFill className='icon-light' size={30}/>}
                                </div>
                                <a href="/" className="btn-btn" >Inicio</a>
                                <a href="/about" className="btn-btn" >Sobre mí</a>
                                <a href="/skills" className="btn-btn" >Habilidades</a>
                                <a href="/projects" className="btn-btn">Proyectos</a>
                                <a href="/contact" className="btn-btn" id='contact'> Contacto</a> 
                            </div>
                        </div>
                    </div>
               
        </>
    );
  }
  
  export default NavBar;