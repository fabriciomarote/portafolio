import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { HomeContainer } from '../theme/Changes';
import NavBar from './NavBar';
import Themes from '../theme/Themes'
import '../styles/Home.css';

const Home = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    return (
        <>
            <ThemeProvider theme={Themes[theme]}>
                <HomeContainer>  
                    <div className="navbar">
                            <NavBar theme={theme}/>
                        </div>   
                    <div className='container'>
                        
                        HOME
                    </div>
                </HomeContainer>
            </ThemeProvider>
        </>  
    );
  }
  
  export default Home;