import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';
import IconButton from '@material-ui/core/IconButton';
import Slider from '@material-ui/core/Slider';
import LightRain from "../assets/LightRain.png";

import Storm from "../assets/Storm.png";
import Fire from "../assets/Fire.png";
import Waves from '../assets/Waves.png';
import Forest from "../assets/Forest.png";
import Cafe from "../assets/Cafe.png";
import {isMobile} from "react-device-detect";

const Styles = styled.div`

.box{
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    
}
.buttonIcon{
    width: 8vh;
    height: 8vh;
}

.loadingMessage{
    position: relative;
    justify-content: center;
    align-items: center;
}

.loadingMessage:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    -webkit-animation: ellipsis steps(4,end) 900ms infinite;      
    animation: ellipsis steps(4,end) 900ms infinite;
    content: "...";
    width: 0px;
  }
  
  @keyframes ellipsis {
    to {
      width: 1.25em;    
    }
  }
  
  @-webkit-keyframes ellipsis {
    to {
      width: 1.25em;    
    }
  }

  .slider{
    width: 30vh;
  }

  .break {
    flex-basis: 100%;
    height: 0;
  }

  .textBreak {
    flex-basis: 100%;
    height: 2vh;
}
`;


export const AmbiencePlayer = () => {
    
   
    const [playing, setPlaying] = useState(false);
    const [currentURL,setCurrentURL] = useState(false);
    const [loadingState,setLoadingState] = useState(false);
    const [volume, setVolume] = useState(0.5);

    const handleSliderChange = (event, newVolume) => {
        setVolume(newVolume);
    };

    function handleNewStream(newURL) {
       
        if(currentURL === false){
            setLoadingState(true);
            setPlaying(!playing);
            setCurrentURL(newURL);
            
        }else if (newURL === currentURL){
            setPlaying(!playing);

        }else{
            setCurrentURL(newURL);
            setPlaying(true);
            setLoadingState(true);

        }
    }

    return(
        <Styles>
            <div className="box">
                <ReactPlayer url={currentURL} width= '500px' height='500px' playing={playing} volume={volume} onPlay={()=>{setLoadingState(false)}} onPause={()=>setLoadingState(false)}/>
                
                {loadingState ?  <div className="loadingMessage">Loading</div> : "Add some ambience"}
                <div className="textBreak"></div>
                <IconButton onClick={()=>handleNewStream("https://www.youtube.com/watch?v=qPNvMeP8mQI&afmt=55")}><img src={LightRain} alt="Light rain" className="buttonIcon"/> </IconButton>
                <IconButton onClick={()=> handleNewStream("https://www.youtube.com/watch?v=HmH4W8JOifg&afmt=55")}> <img src={Storm} alt="Storm" className="buttonIcon"/></IconButton>
                <IconButton onClick={()=> handleNewStream("https://www.youtube.com/watch?v=NiqM3lVirkw&afmt=55")}> <img src={Fire} alt="Fire" className="buttonIcon"/></IconButton>
                {isMobile ? <div className="break"></div> : <></>}
                <IconButton onClick={()=> handleNewStream("https://www.youtube.com/watch?v=Nep1qytq9JM&afmt=55")}> <img src={Waves} alt="Waves" className="buttonIcon"/></IconButton>
                <IconButton onClick={()=> handleNewStream("https://www.youtube.com/watch?v=OdIJ2x3nxzQ&afmt=55")}> <img src={Forest} alt="Forest" className="buttonIcon"/></IconButton>
                <IconButton onClick={()=> handleNewStream("https://www.youtube.com/watch?v=gaGrHUekGrc&afmt=55")}> <img src={Cafe} alt="Cafe" className="buttonIcon"/></IconButton>
                <div className="break"></div>
                <Slider className="slider" min={0} max={1} step={0.001} value={volume} onChange={handleSliderChange} aria-labelledby="volume" />
            </div>
        </Styles>
  
)}