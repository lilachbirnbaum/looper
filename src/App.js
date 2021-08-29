
import './App.css';
import LoopMachine from './components/LoopMachine';
import Footer from './components/Footer';
const AUDIO_LIST = 
  [
    {
      id: 0,
      name: "electric guitar coutry slide 120bpm - B",
      audioUrl: "electric guitar coutry slide 120bpm - B.mp3",
    },
    {
      id: 1,
      name: "120_future_funk_beats_25",
      audioUrl: "120_future_funk_beats_25.mp3",
    },
    {
      id: 2,
      name: "120_stutter_breakbeats_16",
      audioUrl: "120_stutter_breakbeats_16.mp3",
    },
    {
      id: 3,
      name: "Bass Warwick heavy funk groove on E 120 BPM",
      audioUrl: "Bass Warwick heavy funk groove on E 120 BPM.mp3",
    },
   
    {
      id: 4,
      name: "FUD_120_StompySlosh",
      audioUrl: "FUD_120_StompySlosh.mp3",
    },
    {
      id: 5,
      name: "GrooveB_120bpm_Tanggu",
      audioUrl: "GrooveB_120bpm_Tanggu.mp3",
    },
    {
      id: 6,
      name: "MazePolitics_120_Perc",
      audioUrl: "MazePolitics_120_Perc.mp3",
    },
    {
      id: 7,
      name: "PAS3GROOVE1.03B",
      audioUrl: "PAS3GROOVE1.03B.mp3",
    },
    {
      id: 8,
      name: "SilentStar_120_Em_OrganSynth",
      audioUrl: "SilentStar_120_Em_OrganSynth.mp3",
    }

  ];

function App() {

  return (
  <div>
    <LoopMachine audioList={AUDIO_LIST}></LoopMachine>
    <Footer></Footer>
  </div>
    
  );
}

export default App;
