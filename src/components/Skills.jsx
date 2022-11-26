import React, { useState } from 'react';
import '../styles/Skills.css';
import { FaGithub, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaBootstrap, FaNode, FaWhatsapp } from "react-icons/fa";
import { DiMongodb, DiMysql    } from "react-icons/di";
import Themes from '../theme/Themes'
import Footer from '../components/Footer'
import { ThemeProvider } from 'styled-components';
import { SkillsContainer } from '../theme/Changes';

const Skills = () => {

   const [theme, setTheme] = useState(localStorage.getItem('theme'));
  
    return (
        <>
            <div className='skills-container'>
               <div className='box-icons'>
                  <div className='icon'>
                     <FaHtml5 size={70}/>
                     <p>HTML</p>
                  </div>
                  <div className='icon'>
                     <FaCss3Alt size={70}/>
                     <p>CSS</p>
                  </div>
                  <div className='icon'>
                     <FaJs size={70}/>
                     <p>Javascript</p>
                  </div>
                  <div className='icon'>
                     <FaReact size={70}/>
                     <p>React</p>
                  </div>
                  <div className='icon'>
                     <FaBootstrap size={70}/>
                     <p>Bootstrap</p>
                  </div>
                  <div className='icon'>
                     <FaNode size={70}/>
                     <p>Node JS</p>
                  </div>
                  <div className='icon'>
                     <DiMongodb size={70}/>
                     <p>MongoDB</p>
                  </div>
                  <div className='icon'>
                     <DiMysql size={70}/>
                     <p>Mysql</p>
                  </div>
                  <div className='icon'>
                     <FaGithub size={70}/>
                     <p>Github</p>
                  </div>

                  <div className='icon'>
                     <FaGitAlt size={70}/>
                     <p>Git</p>
                  </div>
               </div> 
               <div className='footer'>
                    <Footer theme={theme} setTheme={setTheme}/> 
               </div>   
            </div>
        </>  
    );
  }
  
  export default Skills;