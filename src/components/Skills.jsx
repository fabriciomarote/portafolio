import React from 'react';
import { FaGithub, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaBootstrap, FaNode } from "react-icons/fa";
import { DiMongodb, DiMysql } from "react-icons/di"; 
import { SiSpring, SiGradle, SiApachemaven} from "react-icons/si";
import { BsFillSunFill } from "react-icons/bs";
import { TbBrandKotlin } from "react-icons/tb";
import Footer from '../components/Footer'
import '../styles/Skills.css';

const Skills = () => {
  
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
                     <TbBrandKotlin size={70}/>
                     <p>Kotlin</p>
                  </div>
                  <div className='icon'>
                     <FaNode size={70}/>
                     <p>Node JS</p>
                  </div>
                  <div className='icon'>
                     <DiMysql size={70}/>
                     <p>Mysql</p>
                  </div>
                  <div className='icon'>
                     <DiMongodb size={70}/>
                     <p>MongoDB</p>
                  </div>
                  <div className='icon'>
                     <SiSpring size={70}/>
                     <p>Spring Boot</p>
                  </div>
                  <div className='icon'>
                     <SiApachemaven size={70}/>
                     <p>Maven</p>
                  </div>
                  <div className='icon'>
                     <SiGradle size={70}/>
                     <p>Gradle</p>
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
                    <Footer/> 
               </div>   
            </div>
        </>  
    );
  }
  
  export default Skills;