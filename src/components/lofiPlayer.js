import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';
import IconButton from '@material-ui/core/IconButton';
import Slider from '@material-ui/core/Slider';
import ChilledCow from "../assets/ChilledCow.png";
import Chillhop from "../assets/Chillhop.png";
import JazzHopCafe from "../assets/JazzHopCafe.png";
import BootlegBoy from "../assets/BootlegBoy.png";
import Chillhop2 from "../assets/Chillhop2.png";
import SteezyAF from "../assets/SteezyAF.png";
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


export const LofiPlayer = () => {
    
   
    const [playing, setPlaying] = useState(false);
    const [currentURL,setCurrentURL] = useState(false);
    const [loadingState,setLoadingState] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [appleDelayState, setAppleDelayState] = useState(false);
    

    const handleSliderChange = (event, newVolume) => {
        setVolume(newVolume);
    };

    function handleNewStream(newURL) {
       
        if(currentURL === false){
            setLoadingState(true);
            setPlaying(true);
            setCurrentURL(newURL);
            alert(appleDelayState);
            alert("loading is" + loadingState);
            if(appleDelayState==false){
                alert("Not yet triggered ?maybe? loading");
                

            }
            
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
                <ReactPlayer url={currentURL} width= '500px' height='500px' playing={playing} volume={volume} onPlay={()=>{setLoadingState(false)}} onPause={()=>setLoadingState(false)} onReady={()=>{setPlaying(true)}}/>
                {loadingState}
                {loadingState ?  <div className="loadingMessage">Loading</div> : "Choose a station"}
                <div className="textBreak"></div>
                <IconButton onClick={()=>handleNewStream("https://www.youtube.com/watch?v=5qap5aO4i9A&afmt=55")}><img src={ChilledCow} alt="ChilledCow" className="buttonIcon"/> </IconButton>
                <IconButton onClick={()=> handleNewStream("https://www.youtube.com/watch?v=5yx6BWlEVcY&afmt=55")}> <img src={Chillhop} alt="Chillhop" className="buttonIcon"/></IconButton>
                <IconButton onClick={()=> handleNewStream("https://www.youtube.com/watch?v=OVPPOwMpSpQ&afmt=55")}> <img src={JazzHopCafe} alt="JazzHopCafe" className="buttonIcon"/></IconButton>
                {isMobile ? <div className="break"></div> : <></>}
                <IconButton onClick={()=> handleNewStream("https://www.youtube.com/watch?v=7NOSDKb0HlU&afmt=55")}> <img src={Chillhop2} alt="Chillhop" className="buttonIcon"/></IconButton>
                <IconButton onClick={()=> handleNewStream("https://www.youtube.com/watch?v=l7TxwBhtTUY&afmt=55")}> <img src={BootlegBoy} alt="BootlegBoy" className="buttonIcon"/></IconButton>
                <IconButton onClick={()=> handleNewStream("https://www.youtube.com/watch?v=9_CcYN8MVO8&afmt=55")}> <img src={SteezyAF} alt="SteezyAF" className="buttonIcon"/></IconButton>
                <div className="break"></div>
                <Slider className="slider" min={0} max={1} step={0.001} value={volume} onChange={handleSliderChange} aria-labelledby="volume" />
            </div>
        </Styles>
  
)}