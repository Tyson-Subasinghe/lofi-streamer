import React from 'react';
import {useState} from 'react';
import ReactPlayer from 'react-player/youtube';

const alerter = () => {

    alert("Playing audio!");
    return;
}



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
        <div>
        <ReactPlayer url={currentURL} width= '0px' height='0px' playing={playing}  onPlay={()=>{setLoadingState(false)}} onPause={()=>setLoadingState(false)}/>
        
        <div>{loadingState ?  "Loading audio..." : ""}</div>
        
        <button onClick={()=>handleNewStream("https://www.youtube.com/watch?v=5qap5aO4i9A&afmt=55")}> ChilledCow</button>
        <button onClick={()=> handleNewStream("https://www.youtube.com/watch?v=5yx6BWlEVcY&afmt=55")}> ChillHop</button>
        <button onClick={()=> handleNewStream("https://www.youtube.com/watch?v=OVPPOwMpSpQ&afmt=55")}> JazzHopCafe</button>

        
        </div>
  
)}