import React from 'react';
import projects from "../data/Projects.js";
import ModelProject from './ModelProject.jsx';
import '../styles/Projects.css';

const Proyects = () => {
  
    return (
        <>
            <div className='projects-box-container'>
                <div className='box-projects'>
                    {projects.map( project => {
                    return <ModelProject key={project.id} project={project}/>
                    })}
                </div>
            </div>
        </>  
    );
  }
  
  export default Proyects;