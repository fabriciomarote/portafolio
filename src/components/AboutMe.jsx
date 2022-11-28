import React from 'react';
import foto from '../assets/img/foto.jpeg'; 
import { BsFillGeoAltFill, BsFillPersonFill } from "react-icons/bs";
import '../styles/AboutMe.css';

const AboutMe = () => {
  
    return (
        <>
            <div className='about-container'>
                <div className='box-title'>
                    <h1>SOBRE MÍ</h1>
                </div> 
                <div className='box-image'>
                    <img className='foto' src={foto} alt="logo" />
                </div> 
                <div className='text-box'>    
                    <p>Soy un estudiante de la carrera de Licenciatura en Informática de la Universidad Nacional de Quilmes. Durante mi carrera he desarrollado varios proyectos utilizando diferentes lenguajes y tecnologías, tengo experiencia y un buen manejo en lo que respecta al trabajo en equipo, además he trabajado y tengo conocimientos sobre la metodologia agile. Me he interesado y especializado además de forma autodidacta en el desarrollo de aplicaciones web con JavaScript para el frontend y Kotlin para el backend. Aprendí a trabajar con distintas tecnologías como HTML, CSS, React, SQL, Javalin, Spring Boot entre otras. He trabajado también con Java, Node.js, Express, MongoDB y Neo4j.</p>
                </div>
                <div className='box-cv'>
                    <a href="" className='button-cv'>CV</a> 
                </div> 
            </div>
        </>  
    );
  }
  
  export default AboutMe;