import React from 'react';
import '../styles/Skills.css';
import { FaGithub, FaJs, FaLinkedin, FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";

const Skills = () => {
  
    return (
        <>
            <div className='container'>
               <div className='box-icons'>
                  <div className='icon'>
                     <FaJs size={90}/>
                     <p>Javascript</p>
                  </div>
                  <div className='icon'>
                     <FaGithub size={90}/>
                     <p>Github</p>
                  </div>
                  <div className='icon'>
                     <FaHtml5 size={90}/>
                     <p>HTML</p>
                  </div>
                  <div className='icon'>
                     <FaCss3Alt size={90}/>
                     <p>CSS</p>
                  </div>
                  <div className='icon'>
                     <FaReact size={90}/>
                     <p>React</p>
                  </div>
                  <div className='icon'>
                     <FaLinkedin size={90}/>
                     <p>CSS</p>
                  </div>
                  <div className='icon'>
                     <FaGitAlt size={90}/>
                     <p>Git</p>
                  </div>
               </div> 
            </div>
        </>  
    );
  }
  
  export default Skills;