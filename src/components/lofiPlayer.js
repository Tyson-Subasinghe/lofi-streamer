import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';
import IconButton from '@material-ui/core/IconButton';
import ChilledCow from "../assets/ChilledCow.png";
import Chillhop from "../assets/Chillhop.png";
import JazzHopCafe from "../assets/JazzHopCafe.png";


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
    top: 80%;
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


export const LofiPlayer = () => {
    
   
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

                <IconButton onClick={()=>handleNewStream("https://www.youtube.com/watch?v=5qap5aO4i9A&afmt=55")}><img src={ChilledCow} alt="ChilledCow" className="buttonIcon"/> </IconButton>
                <IconButton onClick={()=> handleNewStream("https://www.youtube.com/watch?v=5yx6BWlEVcY&afmt=55")}> <img src={Chillhop} alt="Chillhop" className="buttonIcon"/></IconButton>
                <IconButton onClick={()=> handleNewStream("https://www.youtube.com/watch?v=OVPPOwMpSpQ&afmt=55")}> <img src={JazzHopCafe} alt="JazzHopCafe" className="buttonIcon"/></IconButton>

            </div>
        </Styles>
  
)}