import React from "react";
import { FaGithub, FaPager } from "react-icons/fa";
import '../styles/ModelProject.css';

const ModelProject = (props) => {

    const { project } = props

    return (
        <div className="project-container">
            <div className='box-image-project'>
                <img alt="imagen" className="image-project" src={project.image}></img>
            </div>
            <div className='box-title-project'>
                <p className="title">{project.title}</p>
            </div>
            <div className='box-text'>
                <p>{project.text}</p>
            </div>
            <div className='box-buttons'>
                
                <a href={project.link1} className='button-project'><FaPager size={23}/>Ver proyecto</a> 
                <a href={project.link2} className='button-project'><FaGithub size={23}/>Ver código</a>
            </div> 
        </div>
        
    );
};
  
export default ModelProject;
