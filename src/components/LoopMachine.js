import React, {useContext, useEffect, useState} from "react";
import Pad from './Pad';
import Timer from './Timer';
import './Pad.css';
import './LoopMachine.css';

const OFF = false;
const ON = true;
const TIMER = "Timer.mp3";
let audio_mode_dummy = [OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF,OFF];
const LoopMachine = (props) => {
  
    const [audioModes, setAudioMode] = useState(audio_mode_dummy);
    const [loopState,setLoopMachineState] = useState(OFF);
    //const [loopState,setLoopMachineState] = useState(OFF);

    const onHandler = () =>{
        var foundOneOn = false;
        audioModes.map(item => foundOneOn = foundOneOn || item);
        var timer = document.getElementById("Timer");
        if(foundOneOn){
            setLoopMachineState(ON);
            timer.play();
            repeatAudio();
            
        }
    }
    const stopTimer = () =>{
        var timer = document.getElementById("Timer");
        timer.pause();
        timer.currentTime = 0;
    }
    const offHandler = () =>{
        setLoopMachineState(OFF);
        stopTimer();
        props.audioList.map(item => stopAudio(item));
    }

    const repeatAudio = () => {
        props.audioList.map(item => playItemAudio(item));

    }
    const playItemAudio = (item) => {

        var audioHTMLItem = document.getElementById(item.name)
        if(audioModes[item.id] == ON){
            audioHTMLItem.play();
        }
        
            
    } 
    const stopAudio = (item) =>{
        var audioItem = document.getElementById(item.name)
        audioItem.pause();
        audioItem.currentTime = 0;
        var audioList = audioModes;
        audioList[audioItem.id] = OFF;
        setAudioMode(audioList);
    }
    
    const padClickedHandler = (item) => {
        var myAudio = document.getElementById(item.name);
        //set mode of audio
        var audioList = audioModes;
        audioList[item.id] = !audioList[item.id];
        setAudioMode(audioList);
        // stop playing if playing
        if(myAudio.play && audioList[item.id] == OFF){
          myAudio.pause();
          myAudio.currentTime = 0;
        }
        console.log(audioModes);

    }
    const audioEndedHandler = (item) => {
        var foundOneOn = false;
        //audioModes.map(item => foundOneOn = foundOneOn || item);
        var timer = document.getElementById("Timer");
        if(loopState == ON){
            
            timer.play();
            repeatAudio();
        }
        

    }
  

     
    return(
    <div className="App">
        <Timer timer={TIMER} id={"Timer"} audioEndedHandler={audioEndedHandler}></Timer>
        <h1>Loop Machine</h1>
        <div>
            {!loopState && <button onClick={onHandler}>on</button>}
            {loopState && <button onClick={offHandler}>off</button>}
        </div>
        <div className="pads-container">
            {props.audioList.map(item =>
            <Pad name={item.name} audioUrl={item.audioUrl} id={item.id} padClickedHandler={padClickedHandler} styleOnClicked={audioModes}></Pad>)}
        </div>
    </div>
    
    );
  }
  
  export default LoopMachine;
  