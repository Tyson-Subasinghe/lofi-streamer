import React from 'react';
import styled from 'styled-components';
import {isMobile} from "react-device-detect";
import face from '../assets/Face.png';

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


.componentBox{
   
       
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;

}

.face{
    position: relative;
    z-index: -2;
    width: 40vmin;
    mouseEvents: none;
}
`;



export const NoMatch = () => {
    
    return(
    <Styles>
        <div className="pageBox"> 
            
                    <img className="face" src={face} />
      
        </div>
    </Styles>
    

  
)}