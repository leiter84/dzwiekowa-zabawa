
import { useEffect, useState } from 'react';
import JumpingBall from './JumpingBall/JumpingBall';

export default function App() {
  const [microphone, setMicrophone] = useState<MediaStream | undefined>(undefined)

  useEffect(()=>{
    async function fetchMicrophone(){
      const mic = await navigator.mediaDevices.getUserMedia({audio: true, video: true});
      setMicrophone(mic);
    }
    
    fetchMicrophone();
  })

  return <JumpingBall microphone={microphone}/>
}