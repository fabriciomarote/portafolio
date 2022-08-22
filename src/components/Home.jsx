import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { HomeContainer } from '../theme/Changes';
import Footer from '../components/Footer'
import Themes from '../theme/Themes'
import '../styles/Home.css';

const Home = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    return (
        <>
                    <div className='home-container'>
                        <div className='box-home'>
                            <span>Hola,</span>
                            <span>Soy Fabricio.</span>
                            <span>Desarrollador Front End</span>
                        </div>
                        <div className='footer'>
                            <Footer theme={theme} setTheme={setTheme}/> 
                        </div>   
                    </div>
        </>  
    );
  }
  
  export default Home;