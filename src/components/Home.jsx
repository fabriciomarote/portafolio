import React, { useState } from 'react';
import Footer from '../components/Footer'
import '../styles/Home.css';

const Home = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    return (
        <>
            <div className='home-container'>
                <div className='box-home'>
                        <span>Hola,</span>
                        <span>Soy Fabricio.</span>
                        <span className='span1'>Desarrollador</span>
                        <span className='span1'>Full Stack</span>
                </div>
                <div className='footer'>
                    <Footer theme={theme} setTheme={setTheme}/> 
                </div>   
            </div>
        </>  
    );
  }
  
  export default Home;