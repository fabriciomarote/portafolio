import React from 'react';
import '../styles/Skills.css';
import { FaGithub, FaJs, FaLinkedin, FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";

const Skills = () => {
  
    return (
        <>
            <div className='container'>
                <div className='icon'>
                   <FaJs />
                   <p>Javascript</p>
                </div>
                <div className='icon'>
                   <p className='icon-fa'><FaGithub/></p>
                   <p>Github</p>
                </div>
                <div className='icon'>
                   <FaHtml5 />
                   <p>HTML</p>
                </div>
                <div className='icon'>
                   <FaCss3Alt />
                   <p>CSS</p>
                </div>
                
            </div>
        </>  
    );
  }
  
  export default Skills;