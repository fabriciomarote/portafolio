import React, { useState }  from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeProvider } from 'styled-components';
import { FooterContainer } from '../theme/Changes';
import Themes from '../theme/Themes'
import '../styles/Footer.css';

const Footer = (props) => {

  const { theme, setTheme } = props;

  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <FooterContainer> 
          <div className="main-footer">
            <div className="footer-container">
                <div className="icons-footer">
                  <a href="https://github.com/fabriciomarote" className='icon-f'><FaGithub size={25}/></a>
                  <a href="https://www.linkedin.com/in/fabricio-marote/" className='icon-f'><FaLinkedin size={25}/></a>
                </div>
              <p className="col-sm">
                {"Creado por Fabricio Marote |"} &copy;{new Date().getFullYear()} {"todos los derechos reservados."}
              </p>
            </div>
          </div>
        </FooterContainer>
      </ThemeProvider> 
    </>
  )
}

export default Footer;