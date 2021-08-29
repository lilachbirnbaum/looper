import React, {useContext, useEffect, useState} from "react";



const Timer = (props) => {
  

  const [audioUrl, setAudioUrl] = useState();

  const setTheSound = () => {

    props.padClickedHandler(props);

   }
   const onAudioEnded = () =>{
    props.audioEndedHandler(props);
   }
  
    useEffect(
        () => {
            setAudioUrl(props.timer);
        },[props]
    )
    
     //audioMode={audioModes} setAudioMode={setAudioMode}
      return(
        <div >
         <audio id={props.id} onEnded={onAudioEnded} muted={true}>
            {audioUrl && <source src={require("../Audio/" + audioUrl).default} type="audio/mpeg" preload="auto" ></source>}
         </audio>
        </div>
    
    );
  }
  
  export default Timer;
  