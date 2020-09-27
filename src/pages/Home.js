import React from 'react';
import styled from 'styled-components';
import {isMobile} from "react-device-detect";
import {LofiPlayer} from '../components/lofiPlayer.js';
import {AmbiencePlayer} from '../components/ambiencePlayer.js';
import Logo from '../assets/Logo.png';

const Styles = styled.div`

.pageBox{
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
}


.logo{
    position: relative;
    z-index: -2;
    ${isMobile ? 
      `    
      width: 40%;
      top: 5%;
      
      `
      :
      `
      width: 15%;
      top: 5%;
      `
    }
    font-weight: bold;
    justify-content: center;
    align-items: center;
    display: inline-block;
    mouseEvents: none;
  }

.componentBox{
   
       
        justify-content: center;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
    
}



.largeBreak {
    flex-basis: 100%;
    height: 6vh;
}
`;


export const Home = () => {

    
    return(

        <Styles>
            <div className="pageBox">
                
                
                <div className="componentBox"> 
                <img src={Logo} className="logo" alt="Lofio"/>
                <div className="largeBreak"></div>
                <LofiPlayer/> 
                <div className="largeBreak"></div>
                <AmbiencePlayer/> 
                </div>
                
                
            </div>           
        </Styles>
  
)}