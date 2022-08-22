import React, { useState } from 'react';
import '../styles/Skills.css';
import { FaGithub, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import Themes from '../theme/Themes'
import Footer from '../components/Footer'
import { ThemeProvider } from 'styled-components';
import { SkillsContainer } from '../theme/Changes';

const Skills = () => {

   const [theme, setTheme] = useState(localStorage.getItem('theme'));
  
    return (
        <>
            <ThemeProvider theme={Themes[theme]}>
            <SkillsContainer> 
            <div className='skills-container'>
               <div className='box-icons'>
                  <div className='icon'>
                     <FaHtml5 size={90}/>
                     <p>HTML</p>
                  </div>
                  <div className='icon'>
                     <FaCss3Alt size={90}/>
                     <p>CSS</p>
                  </div>
                  <div className='icon'>
                     <FaJs size={90}/>
                     <p>Javascript</p>
                  </div>
                  <div className='icon'>
                     <FaReact size={90}/>
                     <p>React</p>
                  </div>
                  <div className='icon'>
                     <FaGithub size={90}/>
                     <p>Github</p>
                  </div>

                  <div className='icon'>
                     <FaGitAlt size={90}/>
                     <p>Git</p>
                  </div>
               </div> 
               <div className='footer'>
                    <Footer theme={theme} setTheme={setTheme}/> 
               </div>   
            </div>
            </SkillsContainer>
            </ThemeProvider> 
        </>  
    );
  }
  
  export default Skills;