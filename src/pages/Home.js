import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {isMobile} from "react-device-detect";


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
                <div className="title">Lofi Streamer</div>
                <div> Step 1 is to get the background changing colour DONE</div>
                <div> step 2 is to get the music streamer working</div>
                <div> step 3 is to add white noise, rain and thunder on top</div>
                <div> step 4 is to design buttons and make it sexy </div>

            </div>           
        </Styles>
  
)}