import React, {useContext, useEffect, useState} from "react";
import './Pad.css';


const Pad = (props) => {
  

  const [audioUrl, setAudioUrl] = useState();
  const [num,setNum] = useState(0);
  const [style,setStyle] = useState('');
  const setTheSound = () => {
    
    
    props.padClickedHandler(props);
    setNum(num +1);
    if(num%2){
      setStyle("s");
    }else{
      setStyle("pad-container-onClicked");
    }

   }
  
    useEffect(
        () => {
            setAudioUrl(props.audioUrl);
        },[props]
    )
    
      return(
        <div className="pad-container" id={style} onClick={setTheSound} >
         <label>{props.name}</label>
         <audio id={props.name} loop>
            {audioUrl && <source src={require("../Audio/" + audioUrl).default} type="audio/mpeg" preload="auto" ></source>}
         </audio>
        </div>
    
    );
  }
  
  export default Pad;
  