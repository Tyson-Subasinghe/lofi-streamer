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
      font-size: calc(8vh);
      top: 10%;
      
      `
      :
      `
      font-size: calc(6vw);
      top: 10%;
      `
    }
    font-weight: bold;
    justify-content: center;
    align-items: center;
    display: inline-block;
  }

.componentBox{
   
       
        justify-content: center;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
    
}

.textBreak {
    flex-basis: 100%;
    height: 2vh;
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
                <div className="title">Lofio</div>
                
                <div className="componentBox"> 
                    
                Choose a station!
                <div className="textBreak"></div>
                <LofiPlayer/> 

                <div className="largeBreak"></div>
                Add some ambience!
                <div className="textBreak"></div>
                <RainPlayer/> 

                </div>
                
                
            </div>           
        </Styles>
  
)}