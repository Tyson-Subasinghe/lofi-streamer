import React from 'react';
import {useState} from 'react';
import ReactPlayer from 'react-player/youtube';

const alerter = () => {

    alert("Playing audio!");
    return;
}



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
        <div>
        <ReactPlayer url={currentURL} width= '0px' height='0px' playing={playing}  onPlay={()=>{setLoadingState(false)}} onPause={()=>setLoadingState(false)}/>
        
        <div>{loadingState ?  "Loading audio..." : ""}</div>
        
        <button onClick={()=>handleNewStream("https://www.youtube.com/watch?v=Fm0sToWtatw&afmt=55")}> 321 Relaxing (STORM)</button>
        <button onClick={()=> handleNewStream("https://www.youtube.com/watch?v=x7SQaDTSrVg&afmt=55")}> Rain on window</button>
        <button onClick={()=> handleNewStream("https://www.youtube.com/watch?v=ajABt8KCho8&afmt=55")}> The relaxed guy rain</button>

        
        </div>
  
)}