import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';
import IconButton from '@material-ui/core/IconButton';
import LightRain from "../assets/LightRain.png";
import HeavyRain from "../assets/HeavyRain.png";
import Storm from "../assets/Storm.png";


const Styles = styled.div`

.box{
    justify-content: center;
    align-items: center;
    display: flex;
    
}
.buttonIcon{
    width: 8vh;
    height: 8vh;
}

.loadingMessage{
    position: absolute;
    top: calc(80% + 1em);
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

`;


export const RainPlayer = () => {
    
   
    const [playing, setPlaying] = useState(false);
    const [currentURL,setCurrentURL] = useState(false);
    const [loadingState,setLoadingState] = useState(false);

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
                <ReactPlayer url={currentURL} width= '0px' height='0px' playing={playing}  onPlay={()=>{setLoadingState(false)}} onPause={()=>setLoadingState(false)}/>
                
                {loadingState ?  <div className="loadingMessage">Loading</div> : ""}

                <IconButton onClick={()=>handleNewStream("https://www.youtube.com/watch?v=qPNvMeP8mQI&afmt=55")}><img src={LightRain} alt="Light rain" className="buttonIcon"/> </IconButton>
                <IconButton onClick={()=> handleNewStream("https://www.youtube.com/watch?v=jX6kn9_U8qk&t=8843s&afmt=55")}> <img src={HeavyRain} alt="Heavy rain" className="buttonIcon"/></IconButton>
                <IconButton onClick={()=> handleNewStream("https://www.youtube.com/watch?v=HmH4W8JOifg&t=3408s&afmt=55")}> <img src={Storm} alt="Storm" className="buttonIcon"/></IconButton>

            </div>
        </Styles>
  
)}