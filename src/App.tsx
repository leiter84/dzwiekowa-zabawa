
import { useEffect, useState } from 'react';
import JumpingBall from './JumpingBall/JumpingBall';
import "./App.css";

export default function App() {
  const [microphone, setMicrophone] = useState<MediaStream | undefined>(undefined)

  useEffect(()=>{
    async function fetchMicrophone(){
      const mic = await navigator.mediaDevices.getUserMedia({audio: true, video: true});
      setMicrophone(mic);
    }
    
    fetchMicrophone();
  })

  return <div className="main">
    <header>Dzwiękowa zabawa Igora</header>
    <JumpingBall microphone={microphone}/>
    <nav>
      <div>kulka</div>
    </nav>
  </div>
}