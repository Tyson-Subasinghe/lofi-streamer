import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {isMobile} from "react-device-detect";
import {LofiPlayer} from '../components/lofiPlayer.js';
import {RainPlayer} from '../components/rainPlayer.js';

const Styles = styled.div`

.pageBox{
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    display: flex;
}


.title{
    position: absolute;
    z-index: 2;
    ${isMobile ? 
      `    
      font-size: calc(6vh);
      top: 0;
      
      `
      :
      `
      font-size: calc(4vw);
      top: 10%;
      `
    }
    font-weight: bold;
    justify-content: center;
    align-items: center;
    display: inline-block;
  }

`;


export const Home = () => {

    
    return(

        <Styles>
            <div className="pageBox">
                <div className="title">Lofio</div>
                
                <div> 
                    
                Choose a station!

                <LofiPlayer/> 

                Add some ambience!
                
                <RainPlayer/> 

                </div>
                
                
            </div>           
        </Styles>
  
)}