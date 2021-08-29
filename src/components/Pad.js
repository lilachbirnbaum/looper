import React, {useContext, useEffect, useState} from "react";
import './Pad.css';


const Pad = (props) => {
  

  const [audioUrl, setAudioUrl] = useState();
  const [num,setNum] = useState(0);
  const [color,setColor] = useState('');
  const setTheSound = () => {
    
    
    props.padClickedHandler(props);
    setNum(num +1);
    if(num%2){
      setColor("s");
    }else{
      setColor("pad-container-onClicked");
    }

   }
   const onAudioEnded = () =>{
    props.audioEndedHandler(props);
   }
  
    useEffect(
        () => {
            setAudioUrl(props.audioUrl);
        },[props]
    )
    
      return(
        <div className="pad-container" id={color} onClick={setTheSound} >
         <label>{props.name}</label>
         <audio id={props.name} loop>
            {audioUrl && <source src={require("../Audio/" + audioUrl).default} type="audio/mpeg" preload="auto" ></source>}
         </audio>
        </div>
    
    );
  }
  
  export default Pad;
  