import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {

  return (
    <>

          <div className="main-footer">
            <div className="footer-container">
                <div className="icons-footer">
                  <a href="https://github.com/fabriciomarote" className='icon-f'><FaGithub size={25}/></a>
                  <a href="https://www.linkedin.com/in/fabricio-marote/" className='icon-f'><FaLinkedin size={25}/></a>
                </div>
              <p className="col-sm">
                {"Todos los derechos reservados"} &copy;{new Date().getFullYear()}  {"| Fabricio Marote"}
              </p>
            </div>
          </div>
        
    </>
  )
}

export default Footer;