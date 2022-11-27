import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  
    return (
        <>
            <div className='about-container'>
                <h1>Sobre mí</h1>
                <div className='text-box'>    
                    <p>Soy un estudiante de la carrera de Licenciatura en Informática de la Universidad Nacional de Quilmes. Durante mi carrera he desarrollado varios proyectos utilizando diferentes lenguajes y tecnologías, me he interesado y especializado de forma autodidacta en el desarrollo de aplicaciones web con JavaScript para el frontend y Kotlin para el backend. Aprendí a trabajar con distintas tecnologías como HTML, CSS, React, SQL, Javalin, Spring Boot entre otras. He trabajado también con Java, Node.js, Express, MongoDB y Neo4j.</p>
                </div>
                <div className='box-cv'></div>
                    <a href="" className='button-cv'>CV</a>  
            </div>
        </>  
    );
  }
  
  export default AboutMe;